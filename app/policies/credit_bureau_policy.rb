class CreditBureauPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'cancelation_employees'
        scope.where(role_id: @user.role_id)
      elsif @user.role_key.eql? 'enterprise'
        p "@user -------------------------------------------------------"
        p @user
        scope.where(company_id: @user.company_id)
      else
        nil
      end
    end
  end
end
