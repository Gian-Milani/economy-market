export function handleChangeValue(text: string) {
  const numeric = text.replace(/\D/g, '')

  const number = Number(numeric) / 100

  const formatted = number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return formatted
}
