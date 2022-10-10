class RequestPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      # if @user.god? or @user.credit_area? or @user.promotion_area? or @user.credit_management? or @user.committee?
      #   scope.all
      # elsif @user.role_key.eql? 'analyst'
      #   scope.where(analyst_id: @user.id)
      # end
      if @user.credit_management?
        scope.where(process_status_id: ProcessStatus.find_by(key: ['success_by_credit_area']).try(:id))
      else
        scope.where(process_status_id: ProcessStatus.find_by(key: ['success_by_credit_area','committee_pending']).try(:id))

      end
    end
  end
end
