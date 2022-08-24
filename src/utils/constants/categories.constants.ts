import { IconType } from 'react-icons'
import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from 'react-icons/fa'
import { GiFoodChain, GiTacos, GiSushis, GiPotato, GiSlicedBread } from 'react-icons/gi'

export type CategoriesType = Readonly<{
   cuisine: string;
   Icon: IconType;
}>

enum CategoriesCuisine {
   ITALIAN = 'Italian',
   AMERICAN = 'American',
   THAI = 'Thai',
   FRENCH = 'French',
   KOREAN = 'Korean',
   SPANISH = 'Spanish',
   GERMAN = 'German',
   VIETNAMESE = 'Vietnamese',
}

export const categories: readonly CategoriesType[] = [
   { cuisine: CategoriesCuisine.ITALIAN, Icon: FaPizzaSlice },
   { cuisine: CategoriesCuisine.AMERICAN, Icon: FaHamburger },
   { cuisine: CategoriesCuisine.THAI, Icon: FaDrumstickBite },
   { cuisine: CategoriesCuisine.FRENCH, Icon: GiSushis },

   { cuisine: CategoriesCuisine.KOREAN, Icon: GiFoodChain },
   { cuisine: CategoriesCuisine.SPANISH, Icon: GiSlicedBread },
   { cuisine: CategoriesCuisine.GERMAN, Icon: GiPotato },
   { cuisine: CategoriesCuisine.VIETNAMESE, Icon: GiTacos }
]