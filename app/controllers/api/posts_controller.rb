class Api::PostsController < ApplicationController
  def index
    @posts = City.find(params[:city_id]).posts
    render json: @posts
  end

  def show

  end
  
# /api/cities/:city_id/posts
  def create
    @city = City.find(params[:city_id])
    # Hardcoded to User ID 2 as of now
    @user = User.find(2)

    @post = Post.new(post_params)

    @city.posts << @post
    @user.posts << @post
    @city.save!
    @user.save!

    render json: @post
    
  end

  def update
    
  end

  def destroy
  end

  private

  def post_params
    params.require(:post).permit(:title, :content)
  end
  
end
