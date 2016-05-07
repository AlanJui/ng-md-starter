///<reference path="../../typings/browser.d.ts"/>

// Load Angular libraries
import angular from 'angular';
import 'angular-material';

// Load custom application modules


angular
  .element(document)
  .ready(() => {

    let appName = 'app';
    let body = document.getElementsByTagName('body')[0];

    let app = angular
      .module(appName, [
        'ngMaterial'
      ]);

    angular.bootstrap(body, [app.name], {strictDi: false});
  });
