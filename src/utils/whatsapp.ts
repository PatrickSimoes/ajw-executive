export const defaultWhatsAppNumber = '554191922590'

import i18n from '@/i18n'

export function generateWhatsAppLink(
  key: string,
  params: Record<string, string> = {},
  phone: string = defaultWhatsAppNumber,
): string {
  const message = i18n.global.t(key, params)
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phone}?text=${encodedMessage}`
}
