Post.destroy_all
City.destroy_all
User.destroy_all


#Cities 
atlanta = City.create!(name: 'Atlanta', country: "USA", image: 'https://i.imgur.com/a9lzU4P.jpg')
san_fran = City.create!(name: 'San Francisco', country: 'USA', image: 'https://i.imgur.com/cBxxnn4.jpg')
london = City.create!(name: 'London', country: 'England', image: 'https://i.imgur.com/XGtACV7.jpg')

# #Users
blake = User.create!(name: 'Blake', user_name: 'bpitts', password: 'blablah', image: 'https://imgur.com/bs0FkJC', current_city: 'Atlanta')
skylar = User.create!(name: 'Skylar', user_name: 'sky', password: 'blablah', image: 'https://i.imgur.com/aNt2kxd.jpg', current_city: 'Atlanta')
grant = User.create!(name: 'Grant', user_name: 'gg', password: 'blablah', image:'https://pbs.twimg.com/profile_images/892904652781441024/ATL-oFfI_400x400.jpg', current_city: 'Atlanta')


# #Post
Post.create!(user_id: blake.id, city_id: atlanta.id, title: 'TapRoom', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa. In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque varius ipsum in urna semper volutpat. Etiam ac magna scelerisque, sodales enim at, interdum nibh. Nulla nec blandit orci. Ut suscipit sollicitudin varius. Etiam ut bibendum purus, sit amet tristique lectus.")
Post.create!(user_id: blake.id, city_id: san_fran.id, title: 'Brother Motto', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa. In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque varius ipsum in urna semper volutpat. Etiam ac magna scelerisque, sodales enim at, interdum nibh. Nulla nec blandit orci. Ut suscipit sollicitudin varius. Etiam ut bibendum purus, sit amet tristique lectus.")
Post.create!(user_id: blake.id, city_id: london.id, title: 'Ponce City', content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin diam justo, scelerisque non felis porta, placerat vestibulum nisi. Vestibulum ac elementum massa. In rutrum quis risus quis sollicitudin. Pellentesque non eros ante. Vestibulum sed tristique massa. Quisque et feugiat risus, eu tristique felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Pellentesque varius ipsum in urna semper volutpat. Etiam ac magna scelerisque, sodales enim at, interdum nibh. Nulla nec blandit orci. Ut suscipit sollicitudin varius. Etiam ut bibendum purus, sit amet tristique lectus.")