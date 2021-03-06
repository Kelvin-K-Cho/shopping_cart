# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_06_22_183706) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "gateways", force: :cascade do |t|
    t.string "location"
    t.string "full_name"
    t.string "account_type"
    t.string "routing_number"
    t.string "first_name"
    t.string "last_name"
    t.string "birthdate"
    t.string "ssn"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "postal_code"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_gateways_on_created_at"
    t.index ["updated_at"], name: "index_gateways_on_updated_at"
    t.index ["user_id"], name: "index_gateways_on_user_id"
  end

  create_table "listings", force: :cascade do |t|
    t.string "title"
    t.string "category"
    t.text "description"
    t.string "tags"
    t.float "price"
    t.float "shipping"
    t.string "time"
    t.string "weight"
    t.string "length"
    t.string "width"
    t.string "height"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_listings_on_created_at"
    t.index ["updated_at"], name: "index_listings_on_updated_at"
    t.index ["user_id"], name: "index_listings_on_user_id"
  end

  create_table "notifications", force: :cascade do |t|
    t.string "option"
    t.string "info"
    t.string "time"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_notifications_on_created_at"
    t.index ["updated_at"], name: "index_notifications_on_updated_at"
    t.index ["user_id"], name: "index_notifications_on_user_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "username"
    t.string "full_name"
    t.string "state"
    t.string "city"
    t.string "dob"
    t.string "twenty_one"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_profiles_on_created_at"
    t.index ["updated_at"], name: "index_profiles_on_updated_at"
    t.index ["user_id"], name: "index_profiles_on_user_id"
  end

  create_table "shops", force: :cascade do |t|
    t.string "name", null: false
    t.string "category"
    t.string "state"
    t.string "city"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_shops_on_created_at"
    t.index ["name"], name: "index_shops_on_name", unique: true
    t.index ["updated_at"], name: "index_shops_on_updated_at"
    t.index ["user_id"], name: "index_shops_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["created_at"], name: "index_users_on_created_at"
    t.index ["updated_at"], name: "index_users_on_updated_at"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
