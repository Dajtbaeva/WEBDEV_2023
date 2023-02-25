# OnlineStoreEnhanced

The items are recorded in a json file (items.json). With the help of the json server, a fake api was made
from this file, data was obtained from this api.

On product page you can see more information about the products and an input for searching needed products.
On category page you can select the desired category (input, type radio) and get the results.

With the help of HttpClient service, the data is always updated on the server and the following
functionality was implemented:

- Remove item (DELETE method)
- Change number of likes (PUT method)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
