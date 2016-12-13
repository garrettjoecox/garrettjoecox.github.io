(() => {
  angular
    .module('skeleton')
    .controller('homeC', homeC);

  function homeC(nowPlaying) {
    nowPlaying.get('garrettjoecox')
      .then(res => {
        this.nowPlaying = {
          song: res.name,
          artist: res.artist['#text']
        };
      });
  }
})();
