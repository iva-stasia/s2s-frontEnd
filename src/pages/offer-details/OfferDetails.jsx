import { useState, useEffect } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import aboutOfferTitle from '~/constants/translations/en/common'
import OfferDetailsContainer from '~/containers/offer-details-container/OfferDetailsContainer'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { offerService } from '~/services/offer-service'
import { useTranslation } from 'react-i18next'

const OfferDetails = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const codedOfferId = pathname.split('/')[2]

  const [offer, setOffer] = useState(null)

  useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const response = await offerService.getOfferById(codedOfferId)
        setOffer(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchOfferDetails()
  }, [codedOfferId])

  const { userRole } = useSelector((state) => state.appMain)
  const isTutor = userRole === 'tutor'
  return (
    <PageWrapper>
      <HeaderCard
        buttonText={false}
        description={'offerDetailsPage.topBlock.description'}
        imageAlt='Offer'
        imageSrc={offerIcon}
        title={
          isTutor
            ? 'offerDetailsPage.topBlock.title.tutor'
            : 'offerDetailsPage.topBlock.title.student'
        }
      />
      <OfferDetailsContainer title={t(`${aboutOfferTitle.aboutOffer}`)}>
        <AboutOffer offer={offer} />
      </OfferDetailsContainer>
    </PageWrapper>
  )
}

export default OfferDetails
