(() => {
  angular
    .module('skeleton')
    .directive('uiNavbar', uiNavbar)
    .controller('uiNavbarC', uiNavbarC);

  function uiNavbar() {
    return {
      templateUrl: 'components/ui-navbar/ui-navbarV.html',
    };
  }

  function uiNavbarC($state) {
    this.$state = $state;
    this.states = this.$state.get();
  }
})();
