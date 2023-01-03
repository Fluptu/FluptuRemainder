Rails.application.routes.draw do
  scope "(:locale)" do
    root 'pages#home'
    get 'homeOS', to: 'pages#homeOS'
  end
end
