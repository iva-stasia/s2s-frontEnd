import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import { useTranslation } from 'react-i18next'
import { useCallback } from 'react'
import useAxios from '~/hooks/use-axios'
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded
} from '@mui/icons-material'
import { categoryService } from '~/services/category-service'
import { defaultResponses } from '~/constants'
import AppCarousel from '~/components/app-carousel/AppCarousel'
import OfferCard from '../offer-card/OfferCard'
import { useRef } from 'react'
import useBreakPoints from '~/hooks/use-breakpoints'
import { styles } from '~/components/offer-details-other-offers/OfferDetailsOtherOffers.styles'

const OfferDetailsOtherOffers = ({ offer }) => {
  const { t } = useTranslation()
  const categoryName = offer.category.name

  const serviceFunction = useCallback(
    () => categoryService.getOffersByCategoryName(categoryName),
    [categoryName]
  )

  const { response } = useAxios({
    service: serviceFunction,
    defaultResponse: defaultResponses.array
  })

  const offers = response.items?.length > 0 ? response.items : []
  const carouselRef = useRef(null)

  const { isDesktop, isLaptop } = useBreakPoints()
  const slidesToShow = isDesktop ? 3 : isLaptop ? 2 : 1

  const carouselSettings = {
    slidesToShow,
    wrapAround: false,
    autoplay: false,
    withoutControls: true,
    defaultControlsConfig: {
      pagingDotsStyle: { display: 'none' }
    }
  }

  return (
    <Box>
      <Box sx={styles.container}>
        <IconButton onClick={() => carouselRef.current?.prev()}>
          <ArrowBackIosRounded />
        </IconButton>
        <Typography sx={styles.title}>{t('common.otherOffers')}</Typography>
        <IconButton onClick={() => carouselRef.current?.next()}>
          <ArrowForwardIosRounded />
        </IconButton>
      </Box>

      <AppCarousel ref={carouselRef} settings={carouselSettings}>
        {offers.map((offer) => (
          <Box key={offer.id} sx={{ px: 1 }}>
            <OfferCard offer={offer} view='grid' />
          </Box>
        ))}
      </AppCarousel>
    </Box>
  )
}

export default OfferDetailsOtherOffers
