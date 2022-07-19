export const removeTags = (string: string | undefined): string | undefined => {
   if (!string) return

   return string.replace(/<\/?[^>]+(>|$)/g, '')
}
