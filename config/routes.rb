Rails.application.routes.draw do
  scope "(:locale)" do
    root 'pages#home'
    resources :tasks
    get 'homeOS', to: 'pages#homeOS'
  end
end
