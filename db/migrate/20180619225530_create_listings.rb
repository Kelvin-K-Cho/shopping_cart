class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title
      t.string :category
      t.text :description
      t.string :tags, array: true, default: []
      t.float :price
      t.float :shipping
      t.string :time
      t.string :weight
      t.string :length
      t.string :width
      t.string :height
      t.integer :user_id, null: false, foreign_key: true, index: true

      t.timestamps null: false, index: true
    end
  end
end
