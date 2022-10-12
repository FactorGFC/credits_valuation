class AddIncomeStatementConceptIdToIncomeCalendarDetails < ActiveRecord::Migration[6.1]
  def change
    add_reference :income_calendar_details, :income_statement_concept, null: true, foreign_key: true
  end
end
