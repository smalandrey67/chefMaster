export type CuisineResultsType = {
    id: number;
    title: string;
    image: string;
}

export type CuisineType = {
    results: CuisineResultsType[];
}