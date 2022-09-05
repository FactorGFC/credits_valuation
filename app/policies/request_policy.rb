class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(analyst_id: @user.id)
      end
    end
  end
end
