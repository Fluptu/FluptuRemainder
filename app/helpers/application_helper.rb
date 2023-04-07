module ApplicationHelper


  def current_class?(active_path)
    'active' if request.path == active_path
  end
end
