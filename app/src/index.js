(() => {
  angular
    .module('skeleton', [
      'ui.router',
    ])
    .config(Config)
    .factory('AttachTokens', AttachTokens)
    .run(SetupRouteAuth);

  function Config($urlRouterProvider, $stateProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'views/auth/loginV.html',
        controller: 'authC as authC',
        noAuth: true,
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/auth/signupV.html',
        controller: 'authC as authC',
        noAuth: true,
      })
      .state('home', {
        url: '/home',
        templateUrl: 'views/home/homeV.html',
        controller: 'homeC as homeC',
      });

    $httpProvider.interceptors.push('AttachTokens');
  }

  function AttachTokens($window) {
    return {
      request(payload) {
        const jwt = $window.localStorage.getItem('com.skeleton.token');
        if (jwt) payload.headers.Authorization = `JWT ${jwt}`;
        return payload;
      },
    };
  }

  function SetupRouteAuth($rootScope, $location, $state, AuthAPI) {
    $rootScope.$state = $state;
    $rootScope.$on('$stateChangeStart', (event, to) => {
      if (to && !to.noAuth && !AuthAPI.isAuth()) {
        event.preventDefault();
        $state.go('login');
      }
    });
  }
})();
