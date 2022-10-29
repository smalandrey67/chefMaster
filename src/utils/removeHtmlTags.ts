export const removeHtmlTags = (string: string | undefined): string | undefined => {
  if (string) {
    return string.replace(/<\/?[^>]+(>|$)/g, '')
  }
}
