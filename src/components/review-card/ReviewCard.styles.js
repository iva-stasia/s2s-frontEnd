import appTypography from '~/styles/app-theme/app.typography'
import { blueGrey } from '@mui/material/colors'

export const styles = {
  reviewsContainer: {
    display: 'flex',
    flexDirection: {
      xs: 'column',
      md: 'row'
    },
    padding: '30px 20px'
  },
  authorBlock: {
    display: 'flex',
    flexDirection: {
      xs: 'row',
      md: 'column'
    }
  },
  initialsTimeBlock: {
    marginLeft: {
      xs: '10px'
    }
  },
  descriptionBlock: {
    marginLeft: {
      md: '40px'
    },
    marginTop: {
      xs: '10px'
    }
  },
  initials: {
    ...appTypography.body2,
    color: `${blueGrey[900]}`,
    marginTop: {
      md: '10px'
    },
    display: 'flex',
    flexDirection: {
      xs: 'row',
      md: 'column'
    },
    gap: '4px'
  },
  date: {
    ...appTypography.overline,
    color: `${blueGrey[500]}`,
    marginTop: {
      xs: '-3px',
      md: '4px'
    }
  },
  subjectField: {
    ...appTypography.button,
    color: `${blueGrey[600]}`
  },
  rating: {
    backgroundColor: 'basic.grey',
    borderRadius: '4px',
    padding: '3.5px',
    gap: '3.5px',
    marginTop: {
      xs: '6px',
      md: '10px'
    }
  },
  comment: {
    ...appTypography.body1,
    color: `${blueGrey[900]}`,
    marginTop: {
      xs: '6px',
      md: '10px'
    }
  }
}
