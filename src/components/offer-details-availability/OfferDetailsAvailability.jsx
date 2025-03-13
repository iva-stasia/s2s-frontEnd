import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppButton from '~/components/app-button/AppButton'
import { styles } from '~/components/offer-details-availability/OfferDetailsAvailability.styles'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

const formattedDate = (date) => {
  const locale = navigator.language

  const formattedDate = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: 'short'
  }).format(date)

  const formattedTime = new Intl.DateTimeFormat(locale, {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).format(date)

  return `${formattedDate}, ${formattedTime}`
}

const OfferDetailsAvailability = () => {
  const { t } = useTranslation()
  const [currentFormattedDate, setCurrentFormattedDate] = useState(() =>
    formattedDate(new Date())
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFormattedDate(formattedDate(new Date()))
    }, 1000)

    return () => clearInterval(interval)
  }, [])
  return (
    <Box>
      <Typography sx={styles.text}>
        {t('common.closestAvailableDate')}
      </Typography>
      <Typography sx={styles.date}>{currentFormattedDate}</Typography>
      <AppButton sx={styles.margin} variant='containedLight'>
        {t('common.bookTime')}
      </AppButton>
      <AppButton sx={styles.margin} variant='tonal'>
        {t('common.showCalendar')}
      </AppButton>
    </Box>
  )
}

export default OfferDetailsAvailability
