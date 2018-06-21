class CreateGateways < ActiveRecord::Migration[5.2]
  def change
    create_table :gateways do |t|
      t.string :location
      t.string :full_name
      t.string :account_type
      t.string :routing_number
      t.string :first_name
      t.string :last_name
      t.string :birthdate
      t.string :ssn
      t.string :address
      t.string :city
      t.string :state
      t.string :postal_code
      t.integer :user_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
