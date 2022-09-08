Rails.application.routes.draw do

  resources :flow_concepts
  resources :conciliation_concepts
  resources :f_reasons_concepts
  resources :factor_credits
  #resources :request_comments
  resources :requests
  resources :process_statuses
  resources :income_statement_concepts
  resources :credit_bureaus
  resources :calendars
  resources :company_files
  resources :financial_institutions
  resources :credit_types
  resources :calendar_years
  resources :company_providers
  resources :company_clients
  resources :number_collaborators
  resources :balance_concepts
  resources :status_companies
  resources :blogs
  resources :blog_types
  resources :positions
  resources :companies
  resources :events
  #get 'landing/index'


  devise_for :users,
             controllers: {sessions: 'users/sessions',
                           confirmations: 'users/confirmations',
                           passwords: 'users/passwords'},
             path: '/',
             skip: [:registrations]

  devise_scope :user do
    #authenticated :user do
    #  root 'home#index', as: :authenticated_root
    #end

    #unauthenticated do
    #  root 'users/sessions#new', as: :unauthenticated_root
    #end

    get '/login' => 'home#index', as: :authenticated_root
    get '/home_company' => 'home#home_company'

    get 'get_events',         to: "events#get_events",     :as=>"get_events"
    get 'get_event_info/:id', to: "events#get_event_info", :as=>"get_event_info"
    post    '/save_event'     => 'events#save_event'
    put     '/save_event_agreement' => 'events#save_event_agreement'
    put     '/update_event_agreement' => 'events#update_event_agreement', as: :update_event_agreement
    put     'finish_event/:id'      => 'events#finish_event'
    delete  'delete_event/:id'      => 'events#delete'
    get 'agreements/:id'  => 'events#agreements'

    get '/complete_user' => 'home#complete_user', as: :complete_user
    put 'create_sat_user' => 'home#create_sat_user', as: :create_sat_user
    put 'sat_info_company/:id' => 'companies#sat_info_company', as: :sat_info_company
    put 'sat_income_statement/:id' => 'companies#sat_income_statement', as: :sat_income_statement
    put 'sat_balance_sheet/:id' => 'companies#sat_balance_sheet', as: :sat_balance_sheet
    put 'credit_bureau_info/:id' => 'companies#credit_bureau_info', as: :credit_bureau_info
    put 'credit_bureau_report/:id' => 'companies#credit_bureau_report', as: :credit_bureau_report
=begin
    put 'save_data_crec_sost' => 'companies#save_data_crec_sost', as: :save_extra_data_cs
    put 'save_data_cobertura_deuda' => 'companies#save_data_cobertura_deuda', as: :save_data_cobertura_deuda
    put 'save_data_deuda_fin_lp' => 'companies#save_data_deuda_fin_lp', as: :save_data_deuda_fin_lp
=end
    put 'save_extra_data' => 'companies#save_extra_data', as: :save_extra_data

    get 'request_steps'  => 'companies#request_steps', as: :request_steps
    get 'balance_sheet_request/:company_id'  => 'companies#balance_sheet_request', as: :balance_sheet_request
    post 'create_balance_sheet_request'  => 'companies#create_balance_sheet_request', as: :create_balance_sheet_request
    get 'income_statement_capture/:company_id'  => 'companies#income_statement_capture', as: :income_statement_capture
    post 'create_income_statement_cap'  => 'companies#create_income_statement_cap', as: :create_income_statement_cap
    get 'generate_financial_reasons/:id'  => 'companies#generate_financial_reasons', as: :generate_financial_reasons
    get 'generate_cash_flow/:id'  => 'companies#generate_cash_flow', as: :generate_cash_flow

    get 'balance_sheet_comparative/:id'  => 'companies#balance_sheet_comparative', as: :balance_sheet_comparative
    get 'income_statement_comparative/:id'  => 'companies#income_statement_comparative', as: :income_statement

    get 'company_balance_sheet/:id'  => 'companies#company_balance_sheet', as: :company_balance_sheet
    get 'company_income_statement/:id'  => 'companies#company_income_statement', as: :company_income_statement
    get 'company_details/:id'  => 'companies#company_details', as: :company_details
    get 'dictamen_report/:id/:request_id'  => 'companies#dictamen_report', as: :dictamen_report
    get 'dictamen_report_backup/:id/:request_id'  => 'companies#dictamen_report_backup', as: :dictamen_report_backup
    get 'open_pdf/:id/:file'  => 'companies#open_pdf', as: :open_pdf
    get 'comments/:company_id/:assigned_to' => 'companies#comments'
    put 'save_comment' => 'companies#save_comment', as: :save_comment

    get 'request_comments/:request_id' => 'request_comments#index'

    get '/credit_bureau_pdf.pdf'  => 'companies#credit_bureau_pdf', as: :credit_bureau_pdf

    authenticate :user do
      # Shows all users.
      get '/users', to: 'users/registrations#index', as: :user_registrations

      # Create new users.
      get '/users/new', to: 'users/registrations#new_user', as: :new_user
      post '/users', to: 'users/registrations#create_user', as: :create_user

      # Edit page for a user profile.
      get '/users/edit', to: 'users/registrations#edit', as: :edit_profile
      match '/users', to: 'users/registrations#update', as: :update_profile, via: [:patch, :put]

      # Edit users.
      get '/users/:id/edit', to: 'users/registrations#edit_user', as: :edit_user
      match '/users/:id', to: 'users/registrations#update_user', as: :update_user, via: [:patch, :put]

      # Change password to a user
      get '/users/:id/change_user_password', to: 'users/registrations#change_user_password', as: :change_user_password
      match '/users/:id/save_user_password', to: 'users/registrations#save_user_password', as: :save_user_password, via: [:patch, :put]

      # Change own password
      get '/users/change_password', to: 'users/registrations#change_password', as: :change_password
      match '/save_password', to: 'users/registrations#save_password', as: :save_password, via: [:patch, :put]

      # Profile page for user.
      get '/users/:id', to: 'users/registrations#show', as: :user

      # Destroys a user
      delete '/users/:id', to: 'users/registrations#destroy', as: :destroy_user_registration

      #validate companies
      put 'validate_company' => 'companies#validate_company', as: :validate_company
      put 'change_capture_status' => 'companies#change_capture_status', as: :change_capture_status

      #assign Calendar to companies
      put 'assign_calendar' => 'companies#assign_calendar', as: :assign_calendar

      #assign Analyst to request
      put 'assign_details_to_request' => 'companies#assign_details_to_request', as: :assign_details_to_request
      put 'assign_pdf_to_request' => 'companies#assign_pdf_to_request', as: :assign_pdf_to_request

      #refuse companies
      put 'refuse_company' => 'companies#refuse_company', as: :refuse_company

      #complete data company
      get 'data_company' => 'companies#data_company'

      #Add Comment to request
      put 'add_comment_to_request' => 'request_comments#add_comment_to_request', as: :add_comment_to_request

    end

    # Sets the language to spanish.
    get '/set_language/spanish', to: 'set_language#spanish'

    # Sets the language to english.
    get '/set_language/english', to: 'set_language#english'

  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Sets the language to spanish.
  get '/set_language/spanish', to: 'set_language#spanish'

  # Sets the language to english.
  get '/set_language/english', to: 'set_language#english'

  get '/permissions/generate_seeds', to: 'permissions#generate_seeds', as: :start_generate_seeds
  get '/permissions/get_controller_actions', to: 'permissions#get_controller_actions', as: :get_controller_actions
  resources :permissions, except: [:show]
  resources :roles, except: [:show]
  get '/roles/:id/permissions', to: 'roles#permissions', as: :role_permissions
  put '/roles/:id/permission/:permission_id', to: 'roles#permission', as: :role_permission

  get '/logbook', to: 'audits#logbook_timeline', as: :logbook_timeline
  get '/logbook/details', to: 'audits#logbook_detail_table', as: :logbook_detail_table
  # Get logbooks for timeline
  get '/logbooks/', to: 'audits#get_more_logbooks', as: :get_more_logbooks

  namespace :api do
    namespace :v1 do
    end
  end


  root 'landing#index', as: 'landing'

  get  'loan', to: 'landing#loan', as: :loan
  post  'credit_request', to: 'landing#credit_request'
  get  'get_user_by_email', to: 'landing#get_user_by_email'

  get 'blog_details/:id', to: 'landing#blog_details', as: :blog_details
  get 'company_blog/:id', to: 'landing#company_blog', as: :company_blog

  get 'get_info_sat/:rfc', to: 'api#get_info_sat' #,:defaults => {:format => 'json'}
  get 'get_bureau_report/:rfc', to: 'api#get_bureau_report' #,:defaults => {:format => 'json'}



end
