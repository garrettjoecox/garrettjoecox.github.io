(() => {
  angular
    .module('skeleton')
    .controller('authC', authC);

  function authC($state) {
    this.login = () => {
      $state.go('home');
    };

    this.signup = () => {
      $state.go('home');
    };
  }
})();
