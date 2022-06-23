# Preview all emails at http://localhost:3000/rails/mailers/credit_request_mailer
class CreditRequestMailerPreview < ActionMailer::Preview
  def new_credit_request_email
    @request_data = {
        loan_amount:  "params[:loan_amount]",
        fName:        "params[:fName]",
        sName:        "params[:sName]"
    }

    CreditRequestMailer.with(request_data: @request_data).new_credit_request_email
  end

end
