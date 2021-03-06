class Api::CitiesController < ApplicationController
  
  def index
    @cities = City.all 
    render json: @cities
  end

  def show
    # @city = City.find(params[:id])
    @city = City.joins(:posts).includes(:posts).find(params[:id])
    @posts = @city.posts.order(created_at: :desc)
    puts @city
    render json: {
      city: @city,
      posts: @posts
    }
  end

  def create
    
  end

  def new
  end

  def update
  end

  def destroy
  end

  
end
