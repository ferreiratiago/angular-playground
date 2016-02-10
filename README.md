# angularJS training

A great way to introduce Angular is to have it hands-on. This is what this tutorial is all about. Playing with Angular.

We will go step-by-step exploring the concepts on Angular and build a simple application, including writing and running unit and end-to-end tests.

## get started

You will need to install

### [git](http://git-scm.com/download)
This will allow us to checkout the project:
```
> git clone https://github.com/ferreiratiago/angular-playground.git
> cd angular-playground/
```

### [nodejs](https://nodejs.org/en/download/)
Node will allow us to run [`npm`](https://www.npmjs.com/) in order to install our project dependencies:
```
> npm install
```

## step-0 - bootstrapping

Reset our workspace to `step-0`:
```
> git checkout -f step-0
```

To see if the app is running in the browser open a separate terminal and run:
```
> npm start
```

This will start a web service and run our application at [`http://localhost:9000/app/`](http://localhost:9000/app/).

### about the code
```html
<html lang="en" ng-app>
```
`ng-app` attribute represents the `ngApp` Angular directive used to flag the HTML element that is the *root element* of our application.

```html
 <script src="../node_modules/angular/angular.js"></script>
 ```
This will download the `angular.js` script and register a callback that is executed by the browser when the containing HTML page is fully downloaded.

When the callback is fired Angular looks for our `ngApp` directive and bootstraps our application. The HTML element that contains the `ngApp` attribute will be the application root.

```javascript
Hello {{'World' + '!'}}
```
This line demonstrates 2 core features from Angular:
* binding `{{ }}`
* expressions `'World' + '!'`

The binding tells Angular that it should evaluate the expression and insert the result into the DOM when the binding is.

## step-1 - static template

Reset our workspace to `step-1`:
```
> git checkout -f step-1
```
### about the code
The result from this step is a static page which will helps us to understand the enhances that Angular bring to standard HTML.

From this static HTML we will examine how we can turn an HTML code into a template that Angular will use to dynamically display data.

## step-2 - angular templates
Reset our workspace to `step-2`:
```
> git checkout -f step-2
```
### about the code
#### ngApp
#### view
```html
<html ng-app="angularTraining">
```
#### js
```javascript
var app = angular.module('angularTraining', []);
```

We now create our Angular app and name it (`angularTraining`). The `[]` that follows represents our Angular module dependencies.

#### controller
#### view
```html
<html ng-app="angularTraining">
    <main ng-controller="AngularTrainingController">
```

#### js
```javascript
app.controller('AngularTrainingController', function ($scope) {
    ...
});
```

The data model is now instantiated within our controller `AngularTrainingController`.

The controller is a simple function that takes the `$scope` as an argument, which is where our data model will be stored.

It allow us to use data-binding (`{{ }}`) between the model and the view.

The scope in Angular is crucial since its the the glue which allows the template, model and controller to work together.
Angular uses the `scope` to keep models and views separate, but in sync.


## step-3 - filtering repeaters
Reset our workspace to `step-3`:
```
> git checkout -f step-3
```

#### view
```html
<input ng-model="query">

<li ng-repeat="player in footballPlayers | filter:query">
</li>
```

## step-4 - XHRs & dependency injection
Reset our workspace to `step-4`:
```
> git checkout -f step-4
```

### about the code
#### js
```javascript
app.controller('AngularTrainingController', function ($scope, $http) {
    $http.get('https://api.github.com/users/angular/repos').success(function(data) {
      $scope.gitRepos = data;
    });
});
```

## step-5 - routing & multiple Views
Reset our workspace to `step-5`:
```
> git checkout -f step-5
```

### about the code
#### html
```html
<main class="angular-training-main" ng-view></main>
```

#### js
```javascript
app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/repos', {
                templateUrl: 'partials/repos-list.html',
                controller: 'ReposListCtrl'
            }).
            when('/repo/:repoId', {
                templateUrl: 'partials/repo-details.html',
                controller: 'RepoDetailsCtrl'
            }).
            otherwise({
                redirectTo: '/repos'
            });
    }]);
```

## step-6 - directives
Reset our workspace to `step-6`:
```
> git checkout -f step-6
```

### about the code
#### html
```html
<git-repo repos="gitRepos"></git-repo>
```

#### js
```javascript
app.directive('gitRepo', function () {
    return {
        restrict: 'E',
        scope: {
            repos: '=repos'
        },
        templateUrl: 'partials/repos-list.html'
    };
});
```
