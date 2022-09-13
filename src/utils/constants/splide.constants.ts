type SplideType = Readonly<{
   perPage: number;
   arrows: false;
   pagination: false;
   gap: string;
   start: number;
}>

export const splideOptions = (pageValue: number, startValue?: number): SplideType => {
   return {
      perPage: pageValue,
      arrows: false,
      pagination: false,
      gap: '10px',
      start: startValue ?? 0
   }
}  