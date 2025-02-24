import { useState, useEffect } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { offerService } from '~/services/offer-service'

const OfferDetails = () => {
  const { id } = useParams()

  const [offer, setOffer] = useState({})

  useEffect(() => {
    const fetchOfferDetails = async () => {
      try {
        const response = await offerService.getOfferById(id)
        setOffer(response.data)
      } catch (err) {
        console.log(err)
      }
    }

    fetchOfferDetails()
  }, [id])

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
