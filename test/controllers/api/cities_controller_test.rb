require 'test_helper'

class Api::CitiesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_cities_index_url
    assert_response :success
  end

  test "should get create" do
    get api_cities_create_url
    assert_response :success
  end

  test "should get new" do
    get api_cities_new_url
    assert_response :success
  end

  test "should get update" do
    get api_cities_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_cities_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_cities_show_url
    assert_response :success
  end

end
