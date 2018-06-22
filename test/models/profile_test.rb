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

require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end