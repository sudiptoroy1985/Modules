import { __decorate } from 'tslib';
import { Component, NgModule } from '@angular/core';

let CommonLibComponent = class CommonLibComponent {
};
CommonLibComponent = __decorate([
    Component({
        selector: 'common-lib-component',
        template: '<p>common lib workspace</p>'
    })
], CommonLibComponent);

let CommonLibModule = class CommonLibModule {
};
CommonLibModule = __decorate([
    NgModule({
        declarations: [CommonLibComponent],
        exports: [CommonLibComponent]
    })
], CommonLibModule);

/**
 * Generated bundle index. Do not edit.
 */

export { CommonLibComponent, CommonLibModule };
//# sourceMappingURL=common-lib.js.map
