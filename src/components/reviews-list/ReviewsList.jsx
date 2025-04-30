import { useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import ReviewCard from '~/components/review-card/ReviewCard'
import { styles } from '~/components/reviews-list/ReviewsList.styles.js'
import { useTranslation } from 'react-i18next'

const ReviewsList = ({ offer }) => {
  const { t } = useTranslation()
  const [visibleCount, setVisibleCount] = useState(1)

  const showSubjectLevel =
    offer.category.name +
    ' - ' +
    offer.subject.name +
    ' - ' +
    offer.proficiencyLevel[0]

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3)
  }

  const reviewsToShow = offer.review.slice(0, visibleCount)
  const hasMoreReviews = visibleCount < offer.review.length
  return (
    <Box>
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
        <Divider></Divider>
      </Box>
      {hasMoreReviews && (
        <Button
          onClick={handleLoadMore}
          sx={styles.moreReviewsBtn}
          variant='contained'
        >
          {t('common.moreReviews')}
        </Button>
      )}
    </Box>
  )
}

export default ReviewsList
