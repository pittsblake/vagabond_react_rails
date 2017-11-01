Rails.application.routes.draw do

  get 'vagabond/home'

  root 'vagabond#home'

  namespace :api do
    resources :users do
      resources :posts do
      end
    end
    resources :cities do
        resources :posts do
        end
    end
  end
end