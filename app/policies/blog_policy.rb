class BlogPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'cancelation_employees'
        scope.all
      elsif @user.role_key.eql? 'enterprise'
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.all
      else
        nil
      end
    end
  end
end
