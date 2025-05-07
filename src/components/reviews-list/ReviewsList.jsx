import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import ReviewCard from '~/components/review-card/ReviewCard'
import { styles } from '~/components/reviews-list/ReviewsList.styles.js'
import { useTranslation } from 'react-i18next'

const ReviewsList = ({ offer }) => {
  const { t } = useTranslation()
  const reviews = offer.review || []
  const totalReviews = reviews.length

  const initialReviewCount = 1
  const reviewsStep = 3

  const [visibleCount, setVisibleCount] = useState(initialReviewCount)

  const showSubjectLevel = t('constant.offerCategorySubjectLevel', {
    category: offer.category.name,
    subject: offer.subject.name,
    level: offer.proficiencyLevel[0]
  })

  const handleToggleReviews = () => {
    if (visibleCount >= totalReviews) {
      setVisibleCount((prev) =>
        Math.max(prev - reviewsStep, initialReviewCount)
      )
    } else {
      setVisibleCount((prev) => Math.min(prev + reviewsStep, totalReviews))
    }
  }

  const reviewsToShow = reviews.slice(0, visibleCount)
  const allVisible = visibleCount >= totalReviews

  return (
    <Box>
      {totalReviews === 0 ? (
        <Typography sx={styles.noReviewsMessage}>
          {t('No reviews at the moment')}
        </Typography>
      ) : (
        <>
          <Box>
            {reviewsToShow.map((reviewItem) => {
              const avatar = (
                <Avatar
                  alt='Author'
                  src={reviewItem.author?.photo}
                  sx={styles.avatar}
                >
                  {reviewItem.author?.firstName?.[0]?.toUpperCase()}
                </Avatar>
              )

              return (
                <Box key={reviewItem._id}>
                  <ReviewCard
                    avatar={avatar}
                    comment={reviewItem.comment}
                    createdAt={reviewItem.createdAt}
                    firstName={reviewItem.author.firstName}
                    lastName={reviewItem.author.lastName}
                    rating={reviewItem.rating}
                    showSubjectLevel={showSubjectLevel}
                  />
                </Box>
              )
            })}
            <Divider />
          </Box>
          <Button
            onClick={handleToggleReviews}
            sx={styles.moreReviewsBtn}
            variant='contained'
          >
            {allVisible ? t('common.lessReviews') : t('common.moreReviews')}
          </Button>
        </>
      )}
    </Box>
  )
}

export default ReviewsList
