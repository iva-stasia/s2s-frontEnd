import { useCallback } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { offerService } from '~/services/offer-service'
import useAxios from '~/hooks/use-axios'
import Loader from '~/components/loader/Loader'
import NotFound from '~/pages/error/NotFound'

const OfferDetails = () => {
  const { id } = useParams()
  const serviceFunction = useCallback(() => offerService.getOfferById(id), [id])
  const onResponseFunction = useCallback((data) => {
    console.log('received: ', data)
  }, [])
  const {
    response: offer,
    error,
    loading
  } = useAxios({
    service: serviceFunction,
    defaultResponse: {},
    fetchOnMount: true,
    onResponse: onResponseFunction
  })
  const { userRole } = useSelector((state) => state.appMain)
  const isTutor = userRole === 'tutor'

  if (loading) return <Loader />
  if (error) return <NotFound />

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
