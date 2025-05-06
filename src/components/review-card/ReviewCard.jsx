import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import Rating from '@mui/material/Rating'
import StarIcon from '@mui/icons-material/Star'
import { styles } from '~/components/review-card/ReviewCard.styles.js'
import { formatDateTime } from '~/utils/format-date-time-function'

const ReviewCard = ({
  avatar,
  comment,
  createdAt,
  firstName,
  lastName,
  rating,
  showSubjectLevel
}) => {
  return (
    <Box>
      <Divider></Divider>
      <Box sx={styles.reviewsContainer}>
        <Box sx={styles.authorBlock}>
          <Box>{avatar}</Box>
          <Box sx={styles.initialsTimeBlock}>
            <Box sx={styles.initials}>
              <Typography>{firstName}</Typography>
              <Typography>{lastName}</Typography>
            </Box>
            <Typography sx={styles.date}>
              {formatDateTime(createdAt, 'long')}
            </Typography>
          </Box>
        </Box>
        <Box sx={styles.descriptionBlock}>
          <Typography sx={styles.subjectField}>{showSubjectLevel}</Typography>
          <Rating
            defaultValue={0}
            emptyIcon={
              <StarIcon fontSize='inherit' style={{ opacity: 0.55 }} />
            }
            name='read-only'
            readOnly
            size='small'
            sx={styles.rating}
            value={rating}
          />
          <Typography sx={styles.comment}>{comment}</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default ReviewCard
