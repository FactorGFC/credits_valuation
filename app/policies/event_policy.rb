class EventPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god? or @user.analyst? or @user.committee?
        scope.all
      end
    end
  end
end
