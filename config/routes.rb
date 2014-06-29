Rails.application.routes.draw do

  namespace :api do #, path: '/', constraints: { subdomain: 'api' } do
    resources :csvs
  end

  root 'application#index'
  get '*page', to: 'application#index'

end
