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
Post.create!(user_id: blake.id, city_id: atlanta.id, title: 'Eats', content: "ljlfjals;djfl;asdjfl;asdjfl;aksjfl;a")
Post.create!(user_id: skylar.id, city_id: san_fran.id, title: 'Eats', content: "ljlfjals;djfl;asdjfl;asdjfl;aksjfl;a")
Post.create!(user_id: grant.id, city_id: london.id, title: 'Eats', content: "ljlfjals;djfl;asdjfl;asdjfl;aksjfl;a")