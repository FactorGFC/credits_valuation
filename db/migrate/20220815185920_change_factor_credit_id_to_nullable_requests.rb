class ChangeFactorCreditIdToNullableRequests < ActiveRecord::Migration[6.1]
  def change
    change_column_null :requests, :factor_credit_id, true
  end
end
