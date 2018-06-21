# == Schema Information
#
# Table name: listings
#
#  id          :bigint(8)        not null, primary key
#  title       :string
#  category    :string
#  description :text
#  tags        :string
#  price       :float
#  shipping    :float
#  time        :string
#  weight      :string
#  length      :string
#  width       :string
#  height      :string
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ApplicationRecord

  validates :title, :category, :description, :tags, :price, :shipping, :time, :weight, :length, :width, :height, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

end
