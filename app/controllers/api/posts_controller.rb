class Api::PostsController < ApplicationController
  # def index
  #   @posts = City.find(params[:city_id]).posts.order(created_at: :desc)
  #   puts 'hello'
  #   render json: @posts
  # end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end
  
# /api/cities/:city_id/posts
  def create
    @city = City.find(params[:city_id])
    # Hardcoded to User ID 2 as of now
    @user = User.first
    @post = Post.new(post_params)
    @city.posts << @post
    @user.posts << @post

    @city.posts.reorder(created_at: :desc)
    @user.posts.reorder(created_at: :desc)

    @city.save!
    @user.save!

    render json: @post
    
  end

  def update
    @post = Post.find(params[:id])
    @post.update!(post_params)
    render json: @post
  end

  def destroy
    Post.find(params[:id]).delete
    render status: :ok
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
  
end
