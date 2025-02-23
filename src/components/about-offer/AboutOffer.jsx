import PageWrapper from '~/components/page-wrapper/PageWrapper'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import aboutOfferTitle from '~/constants/translations/en/common'
import showMore from '~/constants/translations/en/common'

const AboutOffer = ({ id, offer }) => {
  const { t } = useTranslation()

  return (
    <PageWrapper>
      <Typography>{t(`${aboutOfferTitle.aboutOffer}`)}</Typography>
      <Typography>{id}</Typography>
      <Typography>{offer?.description}</Typography>
      <Typography>{t(`${showMore.showMore}`)}</Typography>
    </PageWrapper>
  )
}

export default AboutOffer
