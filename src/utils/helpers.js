export function changeIngredients(type, state, number) {
    const ingredients = { ...state };
    ingredients[type] = state[type] + number;
    const updatedIngredients = ingredients;
    return updatedIngredients;
}
