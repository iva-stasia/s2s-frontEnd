export const formatDateTime = (date, format, options = {}) => {
  const locale = navigator.language

  const formats = {
    long: {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    },
    short: {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    }
  }

  return new Intl.DateTimeFormat(locale, {
    ...(formats[format] || formats.long),
    ...options
  }).format(new Date(date))
}
