(() => {
  angular
    .module('skeleton', [
      'ui.router',
      'typer',
    ])
    .config(Config);

  function Config($urlRouterProvider, $stateProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');
    $locationProvider.hashPrefix('');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home/homeV.html',
        controller: 'homeC as homeC',
      })
      .state('about', {
        url: '/about',
        templateUrl: 'views/about/aboutV.html',
        controller: 'aboutC as aboutC',
        nav: 'About',
      })
      .state('work', {
        url: '/work',
        templateUrl: 'views/work/workV.html',
        controller: 'workC as workC',
        nav: 'Work',
      });
  }
})();
