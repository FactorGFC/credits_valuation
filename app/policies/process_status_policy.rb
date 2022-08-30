class ProcessStatusPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'analyst'
        scope.where(key: ['denied_analist', 'credit_validated'])
      else
        nil
      end
    end
  end
end
