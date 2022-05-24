type StepsEquipmentType = {
    id: number;
    image: string;
    name: string;
}

type StepsIngredientsType = {
    id: number;
    image: string;
    name: string;
}

type StepsType = {
    equipment: StepsEquipmentType[]
    ingredients: StepsIngredientsType[]
    step: string;
    number: number;
}

type AnalyzedInstructionsType = {
    steps: StepsType[]
    name: string;
}

type IngredientsType = {
    id: number;
    image: string;
    nameClean: string;
    unit: string,
    amount: number;
}

export type DetailsType = {
    id: number;
    title: string;
    image: string;
    summary: string;
    instructions: string;
    extendedIngredients: IngredientsType[];
    analyzedInstructions: AnalyzedInstructionsType[];
    readyInMinutes: number;
}