import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import { useSelector } from 'react-redux'

const OfferDetails = () => {
  const { userRole } = useSelector((state) => state.appMain)
  return (
    <PageWrapper>
      <HeaderCard
        description={'offerDetailsPage.topBlock.description'}
        imageAlt='Offer'
        imageSrc={offerIcon}
        showButton={false}
        titleStudent={'offerDetailsPage.topBlock.title.student'}
        titleTutor={'offerDetailsPage.topBlock.title.tutor'}
        userRole={userRole}
      />
    </PageWrapper>
  )
}

export default OfferDetails
