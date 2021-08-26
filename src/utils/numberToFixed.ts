export function numberToFixed(num: string | number): number {
    return Number(parseFloat(String(num)).toFixed(2)) || 0
}
