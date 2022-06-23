class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      end
    end
  end
end
