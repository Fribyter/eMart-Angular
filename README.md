# EMart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Live Demo

https://fribyter.github.io/eMart-angular/

## Backend microservices written in Java with springboot:

Backend repo can be found from here: [eMart backend](https://github.com/Fribyter/eMart-backend)

## Front End Wireframes

Please refer to [Wireframe PDF](https://github.com/Fribyter/eMart_angular/blob/master/src/assets/eMart%20Wireframe.pdf)

## Dokcer

Pull the image by running `docker pull adamlad/emartangular:latest`
Run this image by using command `docker run --rm -d -p 80:80/tcp adamlad/emartangular:latest`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change
any of the source files.
You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

## Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use
`npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`,
you can also use the command `ng generate` directly.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
