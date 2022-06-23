# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_15_183853) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "audits", force: :cascade do |t|
    t.integer "auditable_id"
    t.string "auditable_type"
    t.integer "associated_id"
    t.string "associated_type"
    t.integer "user_id"
    t.string "user_type"
    t.string "username"
    t.string "action"
    t.text "audited_changes"
    t.integer "version", default: 0
    t.string "comment"
    t.string "remote_address"
    t.string "request_uuid"
    t.datetime "created_at"
    t.string "user_full_name"
    t.string "auditable_name"
    t.string "user_role_key"
    t.index ["associated_type", "associated_id"], name: "associated_index"
    t.index ["auditable_type", "auditable_id", "version"], name: "auditable_index"
    t.index ["created_at"], name: "index_audits_on_created_at"
    t.index ["request_uuid"], name: "index_audits_on_request_uuid"
    t.index ["user_id", "user_type"], name: "user_index"
  end

  create_table "balance_calendar_details", force: :cascade do |t|
    t.bigint "balance_concept_id"
    t.bigint "calendar_id", null: false
    t.float "value"
    t.string "balance_type"
    t.bigint "company_id"
    t.string "balance_concept_key"
    t.index ["balance_concept_id"], name: "index_balance_calendar_details_on_balance_concept_id"
    t.index ["calendar_id"], name: "index_balance_calendar_details_on_calendar_id"
    t.index ["company_id"], name: "index_balance_calendar_details_on_company_id"
  end

  create_table "balance_concepts", force: :cascade do |t|
    t.string "name"
    t.string "key"
    t.boolean "active"
    t.string "ancestry"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "balance_concept_id"
    t.boolean "capturable"
    t.integer "number_key"
    t.string "name_key"
    t.index ["ancestry"], name: "index_balance_concepts_on_ancestry"
    t.index ["balance_concept_id"], name: "index_balance_concepts_on_balance_concept_id"
  end

  create_table "blog_types", force: :cascade do |t|
    t.string "name"
  end

  create_table "blogs", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.text "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "calendar_years", force: :cascade do |t|
    t.string "name"
    t.string "year"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "calendars", force: :cascade do |t|
    t.string "period_type"
    t.string "year"
    t.string "period"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "companies", force: :cascade do |t|
    t.string "rfc"
    t.string "address"
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.bigint "status_company_id"
    t.string "sat_id"
    t.jsonb "info_company"
    t.jsonb "credential_company"
    t.jsonb "income_statment"
    t.boolean "complete"
    t.boolean "step_one"
    t.boolean "step_two"
    t.boolean "step_three"
    t.string "main_activity"
    t.string "main_products"
    t.boolean "step_four"
    t.jsonb "balance_sheet"
    t.boolean "step_five"
    t.boolean "step_six"
    t.text "cer_encoded"
    t.text "key_encoded"
    t.string "sat_password"
    t.boolean "has_providers"
    t.boolean "has_clients"
    t.string "buro_id"
    t.boolean "group_company"
    t.boolean "balance_sheet_finished"
    t.boolean "income_statement_finished"
    t.index ["status_company_id"], name: "index_companies_on_status_company_id"
  end

  create_table "company_balance_sheets", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "year"
    t.bigint "balance_concept_id", null: false
    t.string "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["balance_concept_id"], name: "index_company_balance_sheets_on_balance_concept_id"
    t.index ["company_id"], name: "index_company_balance_sheets_on_company_id"
  end

  create_table "company_calendar_details", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "calendar_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "assign_to"
    t.index ["calendar_id"], name: "index_company_calendar_details_on_calendar_id"
    t.index ["company_id"], name: "index_company_calendar_details_on_company_id"
  end

  create_table "company_clients", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "name"
    t.string "sales"
    t.string "credit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_company_clients_on_company_id"
  end

  create_table "company_files", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "authorization_name"
    t.text "authorization_file"
    t.string "id_name"
    t.text "id_file"
    t.string "constancy_name"
    t.text "constancy_file"
    t.string "financial_statements_one_name"
    t.text "financial_statements_one_file"
    t.string "financial_statements_two_name"
    t.text "financial_statements_two_file"
    t.string "financial_statements_parcial_name"
    t.text "financial_statements_parcial_file"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_company_files_on_company_id"
  end

  create_table "company_income_statements", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.string "year"
    t.bigint "income_statement_concept_id", null: false
    t.string "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_company_income_statements_on_company_id"
    t.index ["income_statement_concept_id"], name: "index_company_income_statements_on_income_statement_concept_id"
  end

  create_table "company_providers", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "name"
    t.string "purchase"
    t.string "credit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_company_providers_on_company_id"
  end

  create_table "credit_bureaus", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.integer "bureau_id"
    t.jsonb "bureau_info"
    t.jsonb "bureau_report"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_credit_bureaus_on_company_id"
  end

  create_table "credit_types", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "event_details", force: :cascade do |t|
    t.bigint "event_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["event_id"], name: "index_event_details_on_event_id"
    t.index ["user_id"], name: "index_event_details_on_user_id"
  end

  create_table "events", force: :cascade do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.string "text"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "financial_institutions", force: :cascade do |t|
    t.integer "company_id", null: false
    t.string "institution"
    t.integer "credit_type_id"
    t.string "authorized_line"
    t.string "balance"
    t.integer "coin"
    t.string "warranty"
    t.string "rate"
    t.datetime "expiration"
    t.string "destiny"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "type_contract"
    t.index ["company_id"], name: "index_financial_institutions_on_company_id"
    t.index ["credit_type_id"], name: "index_financial_institutions_on_credit_type_id"
  end

  create_table "income_calendar_details", force: :cascade do |t|
    t.bigint "calendar_id", null: false
    t.bigint "company_id", null: false
    t.string "income_statement_concept_key"
    t.float "value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["calendar_id"], name: "index_income_calendar_details_on_calendar_id"
    t.index ["company_id"], name: "index_income_calendar_details_on_company_id"
  end

  create_table "income_statement_concepts", force: :cascade do |t|
    t.string "name"
    t.string "key"
    t.integer "number_key"
    t.string "name_key"
    t.boolean "active"
    t.boolean "capturable"
    t.string "ancestry"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["ancestry"], name: "index_income_statement_concepts_on_ancestry"
  end

  create_table "number_collaborators", force: :cascade do |t|
    t.integer "company_id", null: false
    t.integer "operative"
    t.integer "administrative"
    t.integer "sales"
    t.integer "eventual"
    t.integer "unionized"
    t.integer "total"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["company_id"], name: "index_number_collaborators_on_company_id"
  end

  create_table "permissions", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "action"
    t.string "controller"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "permissions_roles", force: :cascade do |t|
    t.integer "permission_id"
    t.integer "role_id"
    t.index ["permission_id"], name: "index_permissions_roles_on_permission_id"
    t.index ["role_id"], name: "index_permissions_roles_on_role_id"
  end

  create_table "positions", force: :cascade do |t|
    t.string "name"
    t.integer "blog_id"
    t.bigint "blog_type_id"
    t.integer "order"
    t.index ["blog_id"], name: "index_positions_on_blog_id"
    t.index ["blog_type_id"], name: "index_positions_on_blog_type_id"
  end

  create_table "process_statuses", force: :cascade do |t|
    t.string "name"
    t.string "key"
    t.integer "order"
    t.boolean "active"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reports", force: :cascade do |t|
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "request_comments", force: :cascade do |t|
    t.string "comment"
    t.integer "analyst_id"
    t.integer "user_id"
    t.bigint "process_status_id", null: false
    t.bigint "request_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["process_status_id"], name: "index_request_comments_on_process_status_id"
    t.index ["request_id"], name: "index_request_comments_on_request_id"
  end

  create_table "requests", force: :cascade do |t|
    t.bigint "company_id", null: false
    t.bigint "credit_type_id", null: false
    t.bigint "process_status_id", null: false
    t.bigint "user_id", null: false
    t.bigint "analyst_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["analyst_id"], name: "index_requests_on_analyst_id"
    t.index ["company_id"], name: "index_requests_on_company_id"
    t.index ["credit_type_id"], name: "index_requests_on_credit_type_id"
    t.index ["process_status_id"], name: "index_requests_on_process_status_id"
    t.index ["user_id"], name: "index_requests_on_user_id"
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "key"
    t.text "description"
    t.integer "scope"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "status_companies", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "key"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "taggings", force: :cascade do |t|
    t.integer "tag_id"
    t.string "taggable_type"
    t.integer "taggable_id"
    t.string "tagger_type"
    t.integer "tagger_id"
    t.string "context", limit: 128
    t.datetime "created_at"
    t.string "tenant", limit: 128
    t.index ["context"], name: "index_taggings_on_context"
    t.index ["tag_id", "taggable_id", "taggable_type", "context", "tagger_id", "tagger_type"], name: "taggings_idx", unique: true
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
    t.index ["taggable_id", "taggable_type", "context"], name: "taggings_taggable_context_idx"
    t.index ["taggable_id", "taggable_type", "tagger_id", "context"], name: "taggings_idy"
    t.index ["taggable_id"], name: "index_taggings_on_taggable_id"
    t.index ["taggable_type", "taggable_id"], name: "index_taggings_on_taggable_type_and_taggable_id"
    t.index ["taggable_type"], name: "index_taggings_on_taggable_type"
    t.index ["tagger_id", "tagger_type"], name: "index_taggings_on_tagger_id_and_tagger_type"
    t.index ["tagger_id"], name: "index_taggings_on_tagger_id"
    t.index ["tagger_type", "tagger_id"], name: "index_taggings_on_tagger_type_and_tagger_id"
    t.index ["tenant"], name: "index_taggings_on_tenant"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "taggings_count", default: 0
    t.index ["name"], name: "index_tags_on_name", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "first_name"
    t.string "last_name"
    t.bigint "role_id"
    t.string "avatar"
    t.string "employee_number"
    t.bigint "company_id"
    t.string "phone"
    t.string "sat_id"
    t.string "new_password"
    t.index ["company_id"], name: "index_users_on_company_id"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true, where: "(confirmation_token IS NOT NULL)"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, where: "(reset_password_token IS NOT NULL)"
    t.index ["role_id"], name: "index_users_on_role_id"
  end

  add_foreign_key "balance_calendar_details", "balance_concepts"
  add_foreign_key "balance_calendar_details", "calendars"
  add_foreign_key "balance_calendar_details", "companies"
  add_foreign_key "balance_concepts", "balance_concepts"
  add_foreign_key "companies", "status_companies"
  add_foreign_key "company_balance_sheets", "balance_concepts"
  add_foreign_key "company_balance_sheets", "companies"
  add_foreign_key "company_calendar_details", "calendars"
  add_foreign_key "company_calendar_details", "companies"
  add_foreign_key "company_clients", "companies"
  add_foreign_key "company_files", "companies"
  add_foreign_key "company_income_statements", "companies"
  add_foreign_key "company_income_statements", "income_statement_concepts"
  add_foreign_key "company_providers", "companies"
  add_foreign_key "credit_bureaus", "companies"
  add_foreign_key "event_details", "events"
  add_foreign_key "event_details", "users"
  add_foreign_key "financial_institutions", "companies"
  add_foreign_key "income_calendar_details", "calendars"
  add_foreign_key "income_calendar_details", "companies"
  add_foreign_key "number_collaborators", "companies"
  add_foreign_key "permissions_roles", "permissions"
  add_foreign_key "permissions_roles", "roles"
  add_foreign_key "positions", "blog_types"
  add_foreign_key "positions", "blogs"
  add_foreign_key "request_comments", "process_statuses"
  add_foreign_key "request_comments", "requests"
  add_foreign_key "requests", "companies"
  add_foreign_key "requests", "credit_types"
  add_foreign_key "requests", "process_statuses"
  add_foreign_key "requests", "users"
  add_foreign_key "requests", "users", column: "analyst_id"
  add_foreign_key "taggings", "tags"
  add_foreign_key "users", "companies"
  add_foreign_key "users", "roles"
end
