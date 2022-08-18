class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'cancelation_employees'

      end
    end
  end
end
