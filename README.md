# Styleguide

## Docker

Build

  ```
  docker build -t "styleguide" .
  ```

Run gulp

  ```
  docker run -p 1400:1400 styleguide gulp
  ```

## Installation

Run NPM setup

  ```
  npm run setup
  ```

Or

  ``` 
  gem install bundler
  bundle install
  npm install
  ```

## Watch Sass changes and build docs

  ```
  npm run watch
  open http://localhost:4000
  ```
  
## Build the CSS and Docs just once

  ```
  npm run build
  ```

## Dependencies

- [GulpJS](http://gulpjs.com)
- [scss-wipe](https://github.com/marsbergen/scss-wipe)
