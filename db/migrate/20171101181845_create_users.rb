class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :user_name
      t.string :password
      t.string :image
      t.string :current_city

      t.timestamps
    end
  end
end
