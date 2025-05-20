import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { styles } from '~/containers/offer-details-container/OfferDetailsContainer.styles'

const OfferDetailsContainer = ({ title, children, sx = {} }) => {
  return (
    <Box sx={{ ...styles.container, ...sx }}>
      <Typography sx={styles.title}>{title}</Typography>
      {children}
    </Box>
  )
}

export default OfferDetailsContainer
