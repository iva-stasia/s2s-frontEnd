import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import AppButton from '~/components/app-button/AppButton'
import { styles } from '~/components/offer-details-availability/OfferDetailsAvailability.styles'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { formatDateTime } from '~/utils/format-date-time-function'

const formatConfiguration = { hour12: false }
const formatType = 'short'

const OfferDetailsAvailability = () => {
  const { t } = useTranslation()
  const [currentFormattedDate, setCurrentFormattedDate] = useState(() =>
    formatDateTime(new Date(), formatType, formatConfiguration)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFormattedDate(
        formatDateTime(new Date(), formatType, formatConfiguration)
      )
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
