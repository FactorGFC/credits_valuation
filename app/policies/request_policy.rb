class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(analyst_id: @user.id)
      elsif @user.role_key.eql? 'credit_area'
        scope.all
      elsif @user.role_key.eql? 'promotion_area'
        scope.all
      end
    end
  end
end
