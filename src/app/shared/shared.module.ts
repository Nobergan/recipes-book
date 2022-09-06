import { NgModule } from "@angular/core";
import { CommonModule }  from "@angular/common";

import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from "./dropdown.directive";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { PlaceholDerdirective } from "./placeholder/placeholder.directive";

@NgModule({
    declarations: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholDerdirective,
        DropdownDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AlertComponent,
        LoadingSpinnerComponent,
        PlaceholDerdirective,
        DropdownDirective,
        CommonModule
    ],
    entryComponents: [
      AlertComponent 
    ] 
})
export class SharedModule {

}