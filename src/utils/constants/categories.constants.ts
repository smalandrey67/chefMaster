import { IconType } from 'react-icons'
import { FaPizzaSlice, FaHamburger, FaDrumstickBite } from 'react-icons/fa'
import { GiSushis } from 'react-icons/gi'

export type CategoriesType = {
   cuisine: string
   Icon: IconType
}

enum CategoriesCuisine {
   ITALIAN = 'Italian',
   AMERICAN = 'American',
   THAI = 'Thai',
   FRENCH = 'French'
}

export const categories: CategoriesType[] = [
   { cuisine: CategoriesCuisine.ITALIAN, Icon: FaPizzaSlice },
   { cuisine: CategoriesCuisine.AMERICAN, Icon: FaHamburger },
   { cuisine: CategoriesCuisine.THAI, Icon: FaDrumstickBite },
   { cuisine: CategoriesCuisine.FRENCH, Icon: GiSushis },
]




