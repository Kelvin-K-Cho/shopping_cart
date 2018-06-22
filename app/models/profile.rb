# == Schema Information
#
# Table name: profiles
#
#  id         :bigint(8)        not null, primary key
#  username   :string
#  full_name  :string
#  state      :string
#  city       :string
#  dob        :string
#  twenty_one :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Profile < ApplicationRecord

  validates :username, :full_name, :state, :city, :dob, :twenty_one, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
    
end
