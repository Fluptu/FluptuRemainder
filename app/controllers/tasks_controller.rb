class TasksController < ApplicationController
  before_action :set_task, only: %i[ show edit update destroy ]
  before_action :authenticate_user!
  before_action :ensure_frame_response, only: %i[ new edit]


  # GET /tasks or /tasks.json
  def index
    @tasks = current_user.tasks
  end

  # GET /tasks/1 or /tasks/1.json
  def show
  end

  # GET /tasks/new
  def new
    @task = Task.new
  end

  # GET /tasks/1/edit
  def edit
  end

  # POST /tasks or /tasks.json
  def create
    @task = Task.new(task_params)
    @task.user = current_user

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_url }
        format.json { render :show, status: :created, location: @task }
        flash[:notice] = t(:task_create_success)
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /tasks/1 or /tasks/1.json
  def update
    respond_to do |format|
      if @task.update(task_params)
        format.html { redirect_to tasks_url}
        format.json { render :show, status: :ok, location: @task }
        flash[:notice] = t(:task_update_success)
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /tasks/1 or /tasks/1.json
  def destroy
    @task.destroy

    respond_to do |format|
      format.html { redirect_to tasks_url }
      format.json { head :no_content }
      flash[:notice] = t(:task_delete_success)
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_task
      @task = Task.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:title, :body, :scheduled, :completed, :scheduled_date)
    end

    # Prevent from editing or creating new task in another page, accept only modal
    def ensure_frame_response
        return unless Rails.env.development?
        redirect_to tasks_path unless turbo_frame_request?
    end
end
