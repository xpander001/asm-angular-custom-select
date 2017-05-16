(function() {
  'use strict';

  angular
    .module('asm-angular-custom-select')
    .directive('AsmAngularCustomSelect', asmAngularCustomSelect);

  asmAngularCustomSelect.inject = [];

  function asmAngularCustomSelect() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: asmAngularCustomSelectController,
      controllerAs: 'vm',
      link: link,
      restrict: 'A',
      scope: {
      }
    };
    return directive;

    function link(scope, element, attrs) {
    }
  }
  /* @ngInject */
  function asmAngularCustomSelectController() {

  }
})();