Rails.application.routes.draw do
  root 'chatroom#index'
  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destory'
  post 'message', to: 'messages#create'

  mount ApplicationCable.server, at: '/cables'

end
