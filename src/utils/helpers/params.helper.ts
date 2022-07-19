type GenerateParamsArgumentsType = {
   product?: string;
   type: string;
   diet: string;
}

type GenerateParamsReturnsType = {
   productWithLowerCase?: string;
   typeParameter: string;
   dietParameter: string;
}

export const generateParams = (params: GenerateParamsArgumentsType): GenerateParamsReturnsType => {
   const { product, type, diet } = params

   const productWithLowerCase: string | undefined = product?.trim().toLocaleLowerCase()

   const typeParameter: string = type ? `?type=${type}` : ''
   const dietParameter: string = diet ? `&diet=${diet}` : ''

   return {
      productWithLowerCase,
      typeParameter,
      dietParameter
   }
}