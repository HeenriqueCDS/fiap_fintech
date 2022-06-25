export function monefy(value: number) {
    const money = new Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)
    return money
}