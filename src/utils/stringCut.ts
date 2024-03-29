export const stringCut = (string: string | undefined, symbols: number): string => {
  if (!string) return 'no name'

  return string.length >= symbols ? `${string.slice(0, symbols)}...` : string
}
