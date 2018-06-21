class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.string :option
      t.string :info
      t.string :time
      t.integer :user_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
