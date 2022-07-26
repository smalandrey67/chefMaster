export type DetailsType = {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: IngredientsType[];
    analyzedInstructions: AnalyzedInstructionsType[];
    readyInMinutes: number;
    aggregateLikes: number;
}

export type StepType = {
    id: number;
    image: string;
    name: string;
}

export type CookingStepType = {
    ingredients: StepType[];
    step: string;
    number: number;
}

export type AnalyzedInstructionsType = {
    name: string;
    steps: CookingStepType[];
}

export type IngredientsType = {
    id: number;
    image: string;
    nameClean: string;
    unit: string;
    amount: number;
}

