class CreateShops < ActiveRecord::Migration[5.2]
  def change
    create_table :shops do |t|
      t.string :name, null: false, unique: true, index: { unique: true }
      t.string :type
      t.string :state
      t.string :city
      t.integer :user_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
