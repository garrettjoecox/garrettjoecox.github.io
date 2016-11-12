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

    }

    function create() {

    }

    function getOne() {

    }

    function update() {

    }

    function remove() {

    }
  }
})();
