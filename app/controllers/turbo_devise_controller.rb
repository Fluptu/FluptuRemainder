class TurboDeviseController < ApplicationController
  class Responder < ActionController::Responder
    def to_turbo_stream
      controller.render(options.merge(formats: :html))
    rescue ActionView::MissingTemplate => e
      if get?
        raise e
      elsif has_errors? && default_action
        render error_rendering_options.merge(formats: :html,status: :unprocessable_entity)
      else
        redirect_to navigation_location
      end
    end
  end

  self.responder = Responder
  respond_to :html, :turbo_stream

  def page_unauthorized
    if user_signed_in?
      redirect_to login_redirect_path
    else
      render file: 'public/401.html', status: :unauthorized
    end
  end

  private

  def login_redirect_path
    stored_location_for(:user) || admin_path
  end
end