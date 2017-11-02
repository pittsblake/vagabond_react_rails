class Api::CitiesController < ApplicationController
  
  def index
    @cities = City.all 
    render json: @cities
  end

  def show
    @city = City.find(params[:id])
    render json: @city
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
