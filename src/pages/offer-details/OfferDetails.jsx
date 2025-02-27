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
  console.log('id', id)

  // const [offer, setOffer] = useState({})

  // useEffect(() => {
  //   const fetchOfferDetails = async () => {
  //     try {
  //       const response = await offerService.getOfferById(id)
  //       setOffer(response.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }

  //   fetchOfferDetails()
  // }, [id])
  
  // const serviceFunction = useCallback(
  //   () => offerService.getOfferById(id),
  //   [id]
  // )
  const {
    response: offer,
    error,
    loading,
  } = useAxios({
    service: () => offerService.getOfferById(id),
    defaultResponse: {},
    fetchOnMount: true,
    onResponse: (data) => {
      console.log('received: ', data)
    }
  })
  
  // useEffect(() => {
  //   if (id) {
  //     fetchData(id)
  //   }
  // }, [id])
  console.log(offer)

  const { userRole } = useSelector((state) => state.appMain)
  const isTutor = userRole === 'tutor'

  if (loading) return <Loader />
  if (error) return <NotFound />

  return (
    // <PageWrapper>
    //   <HeaderCard
    //     buttonText={false}
    //     description={'offerDetailsPage.topBlock.description'}
    //     imageAlt='Offer'
    //     imageSrc={offerIcon}
    //     title={
    //       isTutor
    //         ? 'offerDetailsPage.topBlock.title.tutor'
    //         : 'offerDetailsPage.topBlock.title.student'
    //     }
    //   />
    //   <AboutOffer offer={offer} />
    // </PageWrapper>
    <div>Offer details</div>
  )
}

export default OfferDetails
