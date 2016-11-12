(() => {
  angular
    .module('skeleton')
    .factory('AuthAPI', AuthAPI);

  function AuthAPI(API) {
    return {
      login,
      signup,
      isAuth,
      logout,
    };

    function login() {

    }

    function signup() {

    }

    function isAuth() {
      return true;
    }

    function logout() {

    }
  }
})();
