class RemoveCityFromPost < ActiveRecord::Migration[5.1]
  def change
    remove_column :posts, :city
  end
end
