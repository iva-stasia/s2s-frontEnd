import { blueGrey } from '@mui/material/colors'

export const styles = {
  avatar: {
    width: {
      xs: '30px',
      md: '48px'
    },
    height: {
      xs: '30px',
      md: '48px'
    },
    border: `0.54px solid ${blueGrey[900]}`,
    backgroundColor: 'basic.grey',
    color: `${blueGrey[900]}`
  },
  moreReviewsBtn: {
    display: 'block',
    margin: {
      xs: '20px auto 0',
      sm: '30px auto 0',
      md: '40px auto 0'
    },
    width: '230px',
    height: '40px'
  },
  noReviewsMessage: {
    color: 'red'
  }
}
