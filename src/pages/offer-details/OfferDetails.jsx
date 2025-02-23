import { useState, useEffect } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { offerService } from '~/services/offer-service'

const OfferDetails = () => {
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
      <AboutOffer offer={offer} />
    </PageWrapper>
  )
}

export default OfferDetails
