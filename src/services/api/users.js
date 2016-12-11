(() => {
  angular
    .module('skeleton')
    .factory('UsersAPI', UsersAPI);

  function UsersAPI(API) {
    return {
      getAll,
      create,
      getOne,
      update,
      remove,
    };

    function getAll() {
      return API.get('/users');
    }

    function create(data) {
      return API.post('/users', data);
    }

    function getOne(id) {
      return API.get(`/users/${id}`);
    }

    function update(id, data) {
      return API.put(`/users/${id}`, data);
    }

    function remove(id) {
      return API.remove(`/users/${id}`);
    }
  }
})();
