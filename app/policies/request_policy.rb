class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      # if @user.god? or @user.credit_area? or @user.promotion_area? or @user.credit_management? or @user.committee?
      #   scope.all
      # elsif @user.role_key.eql? 'analyst'
      #   scope.where(analyst_id: @user.id)
      # end
      if @user.god? || @user.credit_area?
        scope.all
      elsif @user.analyst?
        scope.where(analyst_id: @user.id)
      elsif @user.credit_management?
        scope.where(process_status_id: ProcessStatus.where(key: ['success_by_credit_area','success_validated_period']).pluck(:id))
      else
        scope.where(process_status_id: ProcessStatus.where(key: ['success_by_credit_area','committee_pending']).pluck(:id))
      end
    end
  end
end
