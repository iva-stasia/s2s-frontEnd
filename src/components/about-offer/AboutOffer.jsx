import PageWrapper from '~/components/page-wrapper/PageWrapper'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import {
  aboutOfferTitle,
  showLess,
  showMore
} from '~/constants/translations/en/common'
import { styles } from '~/components/about-offer/AboutOffer.styles'
import { useState } from 'react'

const AboutOffer = ({ offer }) => {
  const { t } = useTranslation()
  const [showFullDescription, setShowFullDescription] = useState(false)
  const shortDescroption =
    offer?.description.split(' ').slice(0, 5).join(' ') + ' ...'

  const handleShowMore = () => {
    setShowFullDescription(true)
  }

  const handleShowLess = () => {
    setShowFullDescription(false)
  }

  return (
    <PageWrapper>
      <Typography>{t(`${aboutOfferTitle.aboutOffer}`)}</Typography>
      <Typography sx={styles.description}>
        {showFullDescription ? offer?.description : shortDescroption}
      </Typography>
      <Typography
        onClick={showFullDescription ? handleShowLess : handleShowMore}
        sx={styles.showDescriptionButton}
      >
        {t(
          showFullDescription ? `${showLess.showLess}` : `${showMore.showMore}`
        )}
      </Typography>
    </PageWrapper>
  )
}

export default AboutOffer
