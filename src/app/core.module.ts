import { NgModule } from "@angular/core";

import { ShoppingListService } from './shopping-list/shopping-list.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service'; 
import { RecipesService } from './recipes/recipes.service';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { LoggingService } from "./logging.service";

 @NgModule({
    providers: [
        ShoppingListService, 
        RecipesService,
        RecipesResolverService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true},
        // LoggingService
      ] 
 })
 export class CoreModule {}