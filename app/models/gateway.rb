# == Schema Information
#
# Table name: gateways
#
#  id             :bigint(8)        not null, primary key
#  location       :string
#  full_name      :string
#  account_type   :string
#  routing_number :string
#  first_name     :string
#  last_name      :string
#  birthdate      :string
#  ssn            :string
#  address        :string
#  city           :string
#  state          :string
#  postal_code    :string
#  user_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Gateway < ApplicationRecord

  validates :location, :full_name, :account_type, :routing_number, :first_name, :last_name, :birthdate, :ssn, :address, :city, :state, :postal_code, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
