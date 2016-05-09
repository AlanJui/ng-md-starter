///<reference path="../../typings/browser.d.ts"/>

// Load CSS
import 'angular-material/angular-material.css!';

// Load Angular libraries
import angular from 'angular';
import 'angular-ui-router';
import 'angular-material';

// Load custom application modules


angular
  .element(document)
  .ready(() => {

    let appName = 'app';
    let body = document.getElementsByTagName('body')[0];

    let app = angular
      .module(appName, [
        'ui.router',
        'ngMaterial'
      ])
      .run(() => {
        console.log('MyApp is ready!');
      });

    angular.bootstrap(body, [app.name], {strictDi: false});
  });
