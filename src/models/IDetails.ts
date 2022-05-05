type IStepsEquipment = {
    id: number;
    image: string;
    name: string;
}

type IStepsIngredients = {
    id: number;
    image: string;
    name: string;
}

type ISteps = {
    equipment: IStepsEquipment[]
    ingredients: IStepsIngredients[]
    step: '';
    number: number;
}

type IAnalyzedInstructions = {
    steps: ISteps[]
}

type IIngredients = {
    id: number;
    image: string; 
    nameClean: string;
    unit: string,
    amount: number;
}

export type IDetails = {
    id: number;
    title: string;
    image: string;
    aggregateLikes: number;
    summary: string; 
    instructions: string;
    extendedIngredients: IIngredients[];
    analyzedInstructions: IAnalyzedInstructions[];
    readyInMinutes: number;
}