'use strict';

import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import './style.scss';

console.log('$', $);
import 'angular';

const app = angular.module('main', []);

app.run(function ($rootScope) {
    'ngInject';
    $rootScope.name = 'Maïté';
    console.log('angularElt', angular.element);
});

import headerUrl from './header/header.html';
app.component('header', {
    template: headerUrl
});
