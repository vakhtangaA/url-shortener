# url-shortener

### Heroku app

https://url-shortener-gol.herokuapp.com/

### Local setup

clone repo\
`$ cd url-shortener`\
`$ npm i`\
`$ npm run dev`\
go to http://localhost:5000/ 

#### Stack:
* MongoDB
* Express
* React
* Node



Frontend has its own repo https://github.com/vakhtangaA/url-shortener-frontend. \
In main app frontend build is used as static content.

For frontend I used Material-UI, as I was  familiar with it and it offers great flexibility.\
User authentication is handled by auth0.\

#### Features

1. User authentication
2. Link shortening
3. Profile page
4. Dashboard page where you can see all urls in database with their corresponding short urls

#### Lack of feature

App can't handle to count how many visitors used shortened link. In the first week of challenge I had no time for working and due to this fact :)) ramaining time wasn't enough for me to implement this feature as well.

#### Joke 

If you put very short url and shorten it, app would make it longer 😄 this is because of long heroku doamin. With proper, short domain it would be better looking, so please use long urls :d
