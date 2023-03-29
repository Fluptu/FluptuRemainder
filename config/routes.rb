Rails.application.routes.draw do

  devise_for :users, only: :omniauth_callbacks, controllers:{ :omniauth_callbacks => "users/omniauth_callbacks"}
  scope "(:locale)" do
    devise_for :users, skip: :omniauth_callbacks
    resources :tasks, :users
    get 'users', to: redirect("users/sign_up")
    get 'homeOS', to: 'pages#homeOS'

    root 'pages#home'
    mount Facebook::Messenger::Server, at: 'bot'
  end

end
