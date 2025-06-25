export const defaultWhatsAppNumber = '554191922590'

export function generateWhatsAppLink(message: string, phone: string = defaultWhatsAppNumber): string {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}
