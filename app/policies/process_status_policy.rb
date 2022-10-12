class ProcessStatusPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god? or @user.promotion_area? or @user.credit_area? or @user.committee?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(key: ['denied_analist', 'credit_validated','denied_validated_period','success_validated_period'])
      elsif @user.role_key.eql? 'credit_management'
        scope.where(key: ['rejected_by_credit_area', 'success_by_credit_area'])
      else
        nil
      end
    end
  end
end
