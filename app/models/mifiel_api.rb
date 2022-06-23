class MifielApi < ApplicationRecord

  def self.find id
    document = Mifiel::Document.find(id)

    return document
  end


end
