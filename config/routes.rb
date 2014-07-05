Rails.application.routes.draw do

  namespace :api do
    resources :csvs
  end

  root 'application#index'
  get '*page', to: 'application#index'

end
