class LandingController < ApplicationController
  skip_before_action :authenticate_user!, :is_authorized
  layout 'landing'

  def index
    blog_id         = BlogType.find_by(name: 'BLOG').try(:id)
    header_blog_id  = BlogType.find_by(name: 'HEADER').try(:id)

    @blogs        = Blog.joins(:position).where(positions: {blog_type_id: blog_id}).order('positions.order ASC')
    @header_blog  = Blog.joins(:position).where(positions: {blog_type_id: header_blog_id}).try(:first)
  end

  def loan
  end

  def credit_request

    request_data = {
        user: {
            first_name: params[:fName],
            last_name:  params[:lName],
            phone:      params[:phone],
            email:      params[:email]
        },
        company: {
            rfc:      params[:rfc],
            name:     params[:companyName],
            address:  params[:companyAddress],
            status_company_id: StatusCompany.where(key: 'pendiente').first.try(:id)
        }
    }

    user    = User.find_by(email: request_data[:user][:email])
    company = Company.find_by(rfc: request_data[:company][:rfc])

    company ? company : company = Company.new(request_data[:company])
    if company['sat_id'].present?
      sat_id = company['sat_id']
    else
      sat_id = nil
    end
    user    ? user    : user    = User.new(request_data[:user])
    new_password = [*('a'..'z'),*('0'..'9')].shuffle[0,8].join

    respond_to do |format|
      if company.save
        if user.id
          user.company_id             = company.id
          user.sat_id                 = sat_id
        else
          user.company_id             = company.id
          user.role_id                = Role.find_by_key('enterprise').try(:id).present? ?   Role.find_by_key('enterprise').try(:id) : 4
          user.password               = new_password
          user.password_confirmation  = new_password
          user.new_password           = new_password
          user.sat_id                 = sat_id

          user.skip_confirmation!
        end


        if user.save
          #Envia corrro de confirmación
          #CreditRequestMailer.with(request_data: request_data).new_credit_request_email.deliver_now

          #Envia mensaje de bienvenida al registrarse en el portal
          Company.send_msj_to_company  company, user,1

          format.html { redirect_to '/', notice: t('notifications_masc.success.resource.created',
                                                         resource: t('roles.form.resource')) }
        else
          p user.errors
          format.html { redirect_to '/loan', notice: user.errors }
        end
      else
        p company.errors
        format.html { redirect_to '/loan', notice: company.errors }
      end
    end
  end

  def blog_details
    @blog         = Blog.find(params[:id])
    @latest_blogs = Blog.where.not(id: @blog.id)
  end

  def company_blog
    @company        = Company.find(params[:id])
    @latest_blogs   = Blog.all.last(4)

    fdata = @company.balance_sheet.first['children']
    sdata = @company.balance_sheet.second['children']

    @company_graph  = [
        {
          name: fdata.first['category'], data: fdata.first.except('category', 'children')
        },{
          name: fdata.second['category'], data: fdata.second.except('category', 'children')
        },{
          name: sdata.first['category'], data: sdata.first.except('category', 'children')
        },{
          name: sdata.second['category'], data: sdata.second.except('category', 'children')
        }
    ]
  end
end
