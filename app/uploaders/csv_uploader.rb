class CsvUploader < CarrierWave::Uploader::Base

  storage :file if !Rails.env.production?

  def store_dir
    "assets/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

end
