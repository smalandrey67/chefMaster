type SplideType = {
   perPage: number
   arrows: false
   pagination: false
   gap: string
}


export const splideOptions = (page: number): SplideType => {
   return {
      perPage: page,
      arrows: false,
      pagination: false,
      gap: '10px',
   }
}  