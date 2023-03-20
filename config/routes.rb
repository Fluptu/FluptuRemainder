Rails.application.routes.draw do

  scope "(:locale)" do
    devise_for :users
    root 'pages#home'
    resources :tasks, :user
    get 'homeOS', to: 'pages#homeOS'
    mount Facebook::Messenger::Server, at: 'bot'
  end


end
