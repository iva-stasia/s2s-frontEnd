import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import tickImg from '~/assets/img/offer-details/tick.svg'
import { styles } from '~/components/offer-general-information-card/OfferGeneralInformationCard.styles'

const OfferGeneralInformationCard = ({
  imgAlt,
  imgSrc,
  index,
  offerElement,
  title
}) => {
  return (
    <Box sx={{ ...styles.container, marginTop: index === 0 ? 0 : '10px' }}>
      <Box alt={imgAlt} component='img' src={imgSrc} sx={styles.img}></Box>
      <Box sx={{ marginLeft: { md: '30px', xs: '10px' } }}>
        <Typography sx={styles.title}>{title}</Typography>
        {Array.isArray(offerElement) ? (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {offerElement.map((item, idx) => (
              <Box key={idx} sx={{ display: 'flex' }}>
                <Box
                  alt='Tick'
                  component='img'
                  src={tickImg}
                  sx={styles.tick}
                ></Box>
                <Typography sx={styles.element}>{item}</Typography>
              </Box>
            ))}
          </Box>
        ) : (
          <Typography sx={styles.element}>{offerElement}</Typography>
        )}
      </Box>
    </Box>
  )
}

export default OfferGeneralInformationCard
