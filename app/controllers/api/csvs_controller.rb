class Api::CsvsController < ApplicationController

  def create
    csv = Csv.create create_params
    render status: :ok, json: csv.to_json
  end

protected

  def create_params
    params.permit :file
  end

end
