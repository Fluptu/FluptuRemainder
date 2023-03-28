Rails.application.routes.draw do

  devise_for :users, only: :omniauth_callbacks, controllers:{ :omniauth_callbacks => "users/omniauth_callbacks"}
  scope "(:locale)" do
    devise_for :users, controllers: { registrations: 'users/registrations'}, skip: :omniauth_callbacks
    resources :tasks, :users
    get 'users', to: redirect("users/sign_up")
    #get 'users/delete_confirm' => 'users#delete_confirm', as: 'users/delete_confirm'
    # custom tasks delete confirmation modal
    get 'tasks/:id/delete_confirm' => 'tasks#delete_confirm', as: 'tasks/delete_confirm'
    get 'homeOS', to: 'pages#homeOS'

    root 'pages#home'
    mount Facebook::Messenger::Server, at: 'bot'
  end

end
