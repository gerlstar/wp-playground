(function () {
    'use strict';

    // angular
    //     .module('aio.utils')
    //     .directive('ciSetAriaChecked', ciSetAriaChecked);

   
    function ciSetAriaChecked() {
        var directive = {
            bindToController: true,
            controller: CiSetAriaCheckedController,
            controllerAs: 'vm',
            restrict: 'A',
            scope: {}
        };
        return directive;
    }

    CiSetAriaCheckedController.$inject = ['$element'];

    /* @ngInject */
    function CiSetAriaCheckedController($element) {

        var radioStmnts = document.getElementById('radio_stmnts');
        var elm = angular.element(radioStmnts);

        var radioReceipts = document.getElementById('radio_receipts');
        var elm2 = angular.element(radioReceipts);

        var radioConfirm = document.getElementById('radio_confirm');
        var elm3 = angular.element(radioConfirm);

        //where we placed the directive ci-set-aria-checked
        var el = angular.element($element[0]);

        $element.on('click', function (evt) {
            if (el[0].children[0].id === 'radio_stmnts') {
                elm.attr('aria-checked', true);
                elm2.attr('aria-checked', false);
                elm3.attr('aria-checked', false);
            }
            else if (el[0].children[0].id === 'radio_receipts') {
                elm.attr('aria-checked', false);
                elm2.attr('aria-checked', true);
                elm3.attr('aria-checked', false);
            }
            else if (el[0].children[0].id === 'radio_confirm') {
                elm.attr('aria-checked', false);
                elm2.attr('aria-checked', false);
                elm3.attr('aria-checked', true);
            }

        });
    }

})();


