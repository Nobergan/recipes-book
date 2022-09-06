import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipesService {
    recipeChanged = new Subject<Recipe[]>()
    // recipeSelected = new Subject<Recipe>();

    // recipes: Recipe[] = [
    //     new Recipe(
    //         'Schnitzel',
    //         'A very tasty schnitzel',
    //         'https://www.thespruceeats.com/thmb/LeyN-7W9T0KB2nl6pcuDZckHnjc=/4288x2848/filters:fill(auto,1)/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
    //        [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Tomatos', 12)
    //         ]
    //     ),
    //     new Recipe(
    //         'Burger',
    //         'Real delicious burger', 
    //         'https://beyondburger.com.ua/wp-content/uploads/2021/01/dsc_7552-scaled.jpg',
    //         [
    //             new Ingredient('Meat', 1),
    //             new Ingredient('Buns', 23)
    //         ]
    //     )
    // ];
    private recipes: Recipe[] = [];

    constructor(private shoppingListService: ShoppingListService) { }

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}