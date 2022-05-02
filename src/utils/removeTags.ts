export const removeTags = (string: string | undefined) => {
    if(!string) return  

    return string.replace(/<\/?[^>]+(>|$)/g, "")
}