import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import { useSelector } from 'react-redux'

const OfferDetails = () => {
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
    </PageWrapper>
  )
}

export default OfferDetails
