import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

var CommonLibComponent = /** @class */ (function () {
    function CommonLibComponent() {
    }
    CommonLibComponent = __decorate([
        Component({
            selector: 'common-lib-component',
            template: '<p>common lib workspace</p>'
        })
    ], CommonLibComponent);
    return CommonLibComponent;
}());

var CommonLibModule = /** @class */ (function () {
    function CommonLibModule() {
    }
    CommonLibModule = __decorate([
        NgModule({
            declarations: [CommonLibComponent],
            exports: [CommonLibComponent]
        })
    ], CommonLibModule);
    return CommonLibModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { CommonLibComponent, CommonLibModule };
//# sourceMappingURL=common-lib.js.map
