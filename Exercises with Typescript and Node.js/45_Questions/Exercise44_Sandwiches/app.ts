function createSandwich(...ingredients: string[]): void {
    console.log(`Sandwich Summary`);
    console.log(`Bread + ${ingredients.join(" + ")} + Bread`);
}

createSandwich("Lettuce", "Tomato", "Omelete", "Cheese");
createSandwich("Chicken", "Onion", "Cheese", "Omelete");
createSandwich("Chicken", "Lettuce", "Cheese", "Mayonnaise");
