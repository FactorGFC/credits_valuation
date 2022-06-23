class CompanyPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'cancelation_employees'
        scope.where(role_id: @user.role_id)
      elsif @user.role_key.eql? 'enterprise'
        scope.where(id: @user.company_id)
      elsif @user.role_key.eql? 'analyst'
        scope.joins(:requests).where('requests.analyst_id =  ?', @user.id)
      else
        nil
      end
    end
  end
end
