(() => {
  angular
    .module('skeleton')
    .factory('nowPlaying', nowPlaying);

  function nowPlaying($http) {
    const base = 'http://localhost:9000';

    return { get };

    function get(user) {
      return $http({
        method: 'GET',
        url: `http://ws.audioscrobbler.com/2.0/`,
        params: {
          method: 'user.getrecenttracks',
          user: user,
          api_key: '8ffb862c5834252941cff9139200f5e4',
          format: 'json',
          limit: '1',
        }
      }).then(response => response.data.recenttracks.track[0]);
    }
  }
})();
