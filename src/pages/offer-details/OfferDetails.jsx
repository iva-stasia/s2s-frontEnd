import { useCallback } from 'react'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import OfferGeneralInformation from '~/components/offer-general-information/OfferGeneralInformation'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import OfferDetailsContainer from '~/containers/offer-details-container/OfferDetailsContainer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { offerService } from '~/services/offer-service'
import useAxios from '~/hooks/use-axios'
import Loader from '~/components/loader/Loader'
import NotFound from '~/pages/error/NotFound'
import Faq from '~/containers/student-home-page/faq/Faq'

const OfferDetails = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const serviceFunction = useCallback(() => offerService.getOfferById(id), [id])
  const {
    response: offer,
    error,
    loading
  } = useAxios({
    service: serviceFunction,
    defaultResponse: {}
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
      <OfferDetailsContainer title={t('common.aboutOffer')}>
        <AboutOffer offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('offerDetailsPage.generalInfo.title')}>
        <OfferGeneralInformation offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('offerDetailsPage.faqTitle')}>
        <Faq userRole={userRole} />
      </OfferDetailsContainer>
    </PageWrapper>
  )
}

export default OfferDetails
