class Api::CitiesController < ApplicationController
  def index
    @cities = City.all 
    render json: @cities
  end

  def create
  end

  def new
  end

  def update
  end

  def destroy
  end

  def show
  end
end
