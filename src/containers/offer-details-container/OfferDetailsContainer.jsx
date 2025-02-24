import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/containers/offer-details-container/OfferDetailsContainer.styles'

const OfferDetailsContainer = ({ title, children }) => {
  return (
    <Box sx={styles.container}>
      <Typography sx={styles.title}>{title}</Typography>
      {children}
    </Box>
  )
}

export default OfferDetailsContainer
