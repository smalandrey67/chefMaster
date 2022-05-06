export const removeTags = (string: string | undefined): string | undefined => {
    if(!string) return  

    return string.replace(/<\/?[^>]+(>|$)/g, "")
}

export const stringCut = (string: string, symbols: number): string => {
    return string.length >= symbols ? `${string.slice(0, symbols)}...` : string
}