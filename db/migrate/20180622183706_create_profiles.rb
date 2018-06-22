class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :username
      t.string :full_name
      t.string :state
      t.string :city
      t.string :dob
      t.string :twenty_one
      t.integer :user_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
