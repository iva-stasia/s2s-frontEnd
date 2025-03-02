import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
import showMore from '~/constants/translations/en/common'
import showLess from '~/constants/translations/en/common'
import { styles } from '~/components/about-offer/AboutOffer.styles'
import { useState } from 'react'

const AboutOffer = ({ offer }) => {
  const { t } = useTranslation()
  const [showFullDescription, setShowFullDescription] = useState(false)
  const shortDescroption =
    offer?.description?.split(' ').slice(0, 5).join(' ') + ' ...'

  const handleShowMore = () => {
    setShowFullDescription(true)
  }

  const handleShowLess = () => {
    setShowFullDescription(false)
  }

  return (
    <Box>
      <Typography sx={styles.description}>
        {showFullDescription ? offer?.description : shortDescroption}
      </Typography>
      {!showFullDescription && (
        <Typography onClick={handleShowMore} sx={styles.showDescriptionButton}>
          {t(`${showMore.showMore}`)}
        </Typography>
      )}
      {showFullDescription && (
        <Typography onClick={handleShowLess} sx={styles.showDescriptionButton}>
          {t(`${showLess.showLess}`)}
        </Typography>
      )}
    </Box>
  )
}

export default AboutOffer
