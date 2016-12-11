(() => {
  angular
    .module('skeleton')
    .factory('AuthAPI', AuthAPI);

  function AuthAPI(API, UsersAPI) {
    return {
      login,
      signup,
      isAuth,
      logout,
    };

    function login(data) {
      return API.post('/authenticate', data);
    }

    function signup(data) {
      return UsersAPI.create(data);
    }

    function isAuth() {
      return API.get('/authenticated');
    }

    function logout() {
      return API.post('/deauthenticate');
    }
  }
})();
