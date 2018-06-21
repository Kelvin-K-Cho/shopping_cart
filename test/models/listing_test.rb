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

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
