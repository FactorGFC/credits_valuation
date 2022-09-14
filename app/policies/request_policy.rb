class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god? or @user.credit_area? or @user.promotion_area? or @user.credit_management? or @user.committee?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(analyst_id: @user.id)
      end
    end
  end
end
