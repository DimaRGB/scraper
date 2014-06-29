class CreateCsvs < ActiveRecord::Migration
  def change
    create_table :csvs do |t|
      t.string :file
      t.timestamps
    end
  end
end
