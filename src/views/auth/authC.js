(() => {
  angular
    .module('skeleton')
    .controller('authC', authC);

  function authC($state, AuthAPI) {
    this.login = (form) => {
      AuthAPI.login(form)
        .then(() => $state.go('whome'))
        .catch((e) => {
        });
    };

    this.signup = (form) => {
      AuthAPI.signup(form)
        .then(() => AuthAPI.login(form))
        .then(() => $state.go('home'))
        .catch((e) => {
        });
    };
  }
})();
