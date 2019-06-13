# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1 = User.create!(username: "sean", password_digest: "abcdefghijklmno", pic: "https://i.imgur.com/y3YnRBc.jpg")

video1 = Video.create!(url: "https://www.youtube.com/watch?v=1UnIDL-eHOs", user_id: 1)
video2 = Video.create!(url: "https://www.youtube.com/watch?v=lvh6NLqKRfs", user_id: 1)
video3 = Video.create!(url: "https://www.youtube.com/watch?v=4rLCqqmiPGY", user_id: 1)
video4 = Video.create!(url: "https://www.youtube.com/watch?v=3Ne9-9n5Oq0", user_id: 1)
video5 = Video.create!(url: "https://www.youtube.com/watch?v=EvXROXiIpvQ", user_id: 1)

article1 = Article.create!(title: "Article 1", author: "Sean", content: "This is article 1", category: "MLB", user_id: 1)
article2 = Article.create!(title: "Article 2", author: "Sean", content: "This is article 2", category: "NFL", user_id: 1)
article3 = Article.create!(title: "Article 1", author: "Sean", content: "This is article 3", category: "NBA", user_id: 1)
article4 = Article.create!(title: "Article 1", author: "Sean", content: "This is article 4", category: "NHL", user_id: 1)
article5 = Article.create!(title: "Article 5", author: "Sean", content: "This is article 5", category: "Soccer", user_id: 1)


