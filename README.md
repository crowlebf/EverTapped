# EverTapped
First and foremost, clone the repo and run `npm install`

Run a server for the API on `http://localhost:5500/api`

You can install, via npm, `nodemon` globally and then simply run
```
nodemon api/server.js
```
That way it will watch and reload automatically every time you make changes.

In another tab you need to run different server for the front-end, where Vue lives.
The front-end is currently at `http://localhost:5000`
You can use a simple Ruby server like:
```
ruby -run -ehttpd . -p5000
```
or http-server (install it via npm) and run `http-server -p 5000`
