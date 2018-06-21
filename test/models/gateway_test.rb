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

require 'test_helper'

class GatewayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
