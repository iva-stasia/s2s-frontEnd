import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTranslation } from 'react-i18next'
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
      <Typography
        onClick={showFullDescription ? handleShowLess : handleShowMore}
        sx={styles.showDescriptionButton}
      >
        {t(showFullDescription ? 'common.showLess' : 'common.showMore')}
      </Typography>
    </Box>
  )
}

export default AboutOffer
