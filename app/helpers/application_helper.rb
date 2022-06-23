module ApplicationHelper

  def user_with_side_menu?
    current_user.god?
  end

  def show_administration_panel?
    has_policy('Users::Registrations', %w(index new_user)) or has_policy(Role, %w(index new)) or
      has_policy(Permission, %w(index new)) or has_policy(Audit, %w(logbook_timeline logbook_detail_table))
  end

  def has_policy(record, actions)
    return true if current_user.god?

    if record.is_a? String and record.split('::').size > 1
      klass = ActiveSupport::Inflector.deconstantize(record).classify.constantize
      policy = policy(klass)
    else
      record = record.classify.constantize if record.is_a? String
      policy = policy(record)
    end

    actions.each { |query| return true if policy.send('general_policy', record, query) }
    false
  end

  def link_item(text, url, css_class = nil)
    link_to(text, url, css_class) if link_item_visible?(url)
  end

  def link_item_block(url, css_class = nil)
    if link_item_visible?(url)
      link_to(url, css_class) do
        yield
      end
    end
  end

  def paginate(objects)
    will_paginate objects, class: 'pagination col-lg-6 col-sm-12', inner_window: 2, outer_window: 0,
                  next_label: '>', previous_label: '<'
  end

  def pagination_options
    [25, 50, 100, 500]
  end

  private

  def link_item_visible?(url)
    return true # if current_user.god?
    if url.is_a?(ApplicationRecord)
      record = url.class
      query = 'show'
    else
      parsed_params = Rails.application.routes.recognize_path(url)
      record = parsed_params[:controller].classify.constantize
      query = "#{parsed_params[:action]}"
    end

    policy(record).send('general_policy', record, query)
  end

end
