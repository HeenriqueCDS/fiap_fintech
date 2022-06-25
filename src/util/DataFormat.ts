export function formatDate (date: string) {
    const formattedDate = new Intl.DateTimeFormat('pt-br', {
        month: '2-digit',
        day: '2-digit'
    }).format(new Date(date))

    return formattedDate;
}