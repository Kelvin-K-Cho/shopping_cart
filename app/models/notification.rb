# == Schema Information
#
# Table name: notifications
#
#  id         :bigint(8)        not null, primary key
#  option     :string
#  info       :string
#  time       :string
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Notification < ApplicationRecord

  validates :option, :info, :time, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
