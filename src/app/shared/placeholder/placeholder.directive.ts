import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[appPlaceholder]'
})
export class PlaceholDerdirective {

    constructor(public viewContainerRef: ViewContainerRef) {}

}