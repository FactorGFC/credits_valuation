class UserPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      if @user.god?
        scope.all
      elsif @user.role_key.eql? 'admin' or @user.role_key.eql? 'enterprise'
        scope.where(role_id: @user.role_id)
      else
        scope.where(role_id: Role.where(key: %w(admin outgoing incoming link representative)))
      end
    end
  end
end
