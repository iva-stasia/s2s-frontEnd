import Box from '@mui/material/Box'
import categoryImg from '~/assets/img/offer-details/category.svg'
import barChartImg from '~/assets/img/offer-details/bar-chart.svg'
import vectorImg from '~/assets/img/offer-details/vector.svg'
import paceImg from '~/assets/img/offer-details/pace.svg'
import priceImg from '~/assets/img/offer-details/price.svg'
import OfferGeneralInformationCard from '~/components/offer-general-information-card/OfferGeneralInformationCard'
import { useTranslation } from 'react-i18next'

const OfferGeneralInformation = ({ offer }) => {
  const { t } = useTranslation()

  return (
    <Box>
      <OfferGeneralInformationCard
        imgAlt={'Category'}
        imgSrc={categoryImg}
        index={0}
        offerElement={offer.subject.name}
        title={t('offerDetailsPage.generalInfo.subject')}
      />
      <OfferGeneralInformationCard
        imgAlt={'Bar-Chart'}
        imgSrc={barChartImg}
        offerElement={offer.proficiencyLevel}
        title={t('offerDetailsPage.generalInfo.levels')}
      />
      <OfferGeneralInformationCard
        imgAlt={'Vector'}
        imgSrc={vectorImg}
        offerElement={offer.languages}
        title={t('offerDetailsPage.generalInfo.languages')}
      />
      <OfferGeneralInformationCard
        imgAlt={'Pace'}
        imgSrc={paceImg}
        offerElement={offer.price}
        title={t('offerDetailsPage.generalInfo.duration')}
      />
      <OfferGeneralInformationCard
        imgAlt={'Price'}
        imgSrc={priceImg}
        offerElement={t(`${offer.price} UAH/hour`)}
        title={t('offerDetailsPage.generalInfo.price')}
      />
    </Box>
  )
}

export default OfferGeneralInformation
