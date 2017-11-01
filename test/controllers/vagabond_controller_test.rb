require 'test_helper'

class VagabondControllerTest < ActionDispatch::IntegrationTest
  test "should get home" do
    get vagabond_home_url
    assert_response :success
  end

end
