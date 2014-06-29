class Csv < ActiveRecord::Base

  mount_uploader :file, FileUploader

  def file_name
    file.file.original_filename
  end

  def as_json(options = {})
    super options.merge(methods: :file_name)
  end

end
