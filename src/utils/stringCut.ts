export const stringCut = (string: string, symbols: number) => {
    return string.length >= symbols ? `${string.slice(0, symbols)}...` : string
}