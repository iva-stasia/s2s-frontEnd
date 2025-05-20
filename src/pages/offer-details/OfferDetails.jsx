import { useCallback } from 'react'
import Typography from '@mui/material/Typography'
import { Trans } from 'react-i18next'
import PageWrapper from '~/components/page-wrapper/PageWrapper'
import HeaderCard from '~/components/header-card/HeaderCard'
import AboutOffer from '~/components/about-offer/AboutOffer'
import ReviewsList from '~/components/reviews-list/ReviewsList'
import OfferDetailsAvailability from '~/components/offer-details-availability/OfferDetailsAvailability'
import OfferGeneralInformation from '~/components/offer-general-information/OfferGeneralInformation'
import OfferDetailsOtherOffers from '~/components/offer-details-other-offers/OfferDetailsOtherOffers'
import offerIcon from '~/assets/img/offer-page/offer-icon.svg'
import OfferDetailsContainer from '~/containers/offer-details-container/OfferDetailsContainer'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { offerService } from '~/services/offer-service'
import useAxios from '~/hooks/use-axios'
import Loader from '~/components/loader/Loader'
import NotFound from '~/pages/error/NotFound'
import { student } from '~/constants'
import Accordions from '~/components/accordion/Accordions'
import useAccordion from '~/hooks/use-accordion'
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded'
import { accordionItems } from '~/containers/student-home-page/faq/accordionItems'
import { tutorAccordionItems } from '~/containers/tutor-home-page/faq/tutorAccordionItems'
import OfferCard from '~/components/offer-card/OfferCard'

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
  const { activeItemId, changeAccordion } = useAccordion()
  const { userRole } = useSelector((state) => state.appMain)
  const isTutor = userRole === 'tutor'
  const isStudent = userRole === student

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
      <OfferDetailsContainer sx={{ padding: 0 }}>
        <OfferCard offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('common.aboutOffer')}>
        <AboutOffer offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('offerDetailsPage.generalInfo.title')}>
        <OfferGeneralInformation offer={offer} />
      </OfferDetailsContainer>
      <Typography
        component='span'
        sx={{ color: '#455A64', marginTop: '20px' }}
        variant='body2'
      >
        <Trans
          components={{
            0: <span />,
            1: (
              <a
                style={{
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              />
            )
          }}
          i18nKey='offerDetailsPage.offerIssuesOrFeedback'
        />
      </Typography>
      <OfferDetailsContainer
        title={t('offerDetailsPage.generalInfo.availability')}
      >
        <OfferDetailsAvailability offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('offerDetailsPage.faqTitle')}>
        <Accordions
          activeIndex={activeItemId}
          descriptionVariant={'body2'}
          icon={<ExpandMoreRoundedIcon />}
          items={isStudent ? accordionItems : tutorAccordionItems}
          onChange={changeAccordion}
          square
          sx={{
            withIcon: {
              root: { width: '100%', mt: '18px' },
              accordion: {
                mb: 2,
                border: '1px solid #CFD8DC',
                color: 'primary.500',
                borderRadius: '4px',
                boxShadow: 'none',
                backgroundColor: 'transparent'
              },
              titleActive: {
                transition: 'color 0.8s linear'
              },
              inactive: {
                '&:hover': { boxShadow: 'none' },
                '&::before': { display: 'none' }
              },
              summary: {
                p: { xs: '0 16px', sm: '0 32px' },
                '& .MuiAccordionSummary-content': {
                  m: '24px 0'
                }
              },
              details: { p: { xs: '0 16px', sm: '0 32px' } },
              description: {
                pb: '24px',
                color: 'primary.900',
                typography: 'body2',
                fontWeight: 400
              },
              active: {
                '& h6': { color: 'primary.900' },
                '&:hover': { boxShadow: 'none' }
              }
            }
          }}
          titleVariant={'h6'}
        />
      </OfferDetailsContainer>
      <OfferDetailsContainer title={t('offerDetailsPage.reviewsTitle')}>
        <ReviewsList offer={offer} />
      </OfferDetailsContainer>
      <OfferDetailsOtherOffers offer={offer} />
    </PageWrapper>
  )
}

export default OfferDetails
