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
}