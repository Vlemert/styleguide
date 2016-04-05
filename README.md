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

> To avoid issues with gem installation without sudo, make sure you have Ruby installed with `rbenv`

  ```
  npm install
  ```

## Watch Sass changes and build docs

  ```
  npm start
  open http://localhost:4000
  ```
  
## Build the CSS and Docs just once

  ```
  npm run build
  ```

## Dependencies

- [GulpJS](http://gulpjs.com)
- [scss-wipe](https://github.com/marsbergen/scss-wipe)
