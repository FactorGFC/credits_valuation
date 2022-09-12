class ProcessStatusPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(key: ['denied_analist', 'credit_validated'])
      elsif @user.role_key.eql? 'credit_management'
        scope.where(key: ['success_validated_period', 'rejected_by_credit_area', 'success_by_credit_area'])
      elsif @user.role_key.eql? 'credit_area'
        scope.all
      elsif @user.role_key.eql? 'promotion_area'
        scope.all  
      else
        nil
      end
    end
  end
end
