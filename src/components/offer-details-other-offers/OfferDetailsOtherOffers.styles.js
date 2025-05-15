import appTypography from '~/styles/app-theme/app.typography'
import { theme } from '~/styles/app-theme/custom-mui.styles'
export const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    mt: {
      xs: '45px',
      md: '75px',
      lg: '100px'
    },
    mb: '25px'
  },
  title: {
    ...appTypography.h6,
    [theme.breakpoints.up('lg')]: {
      ...appTypography.h4
    }
  }
}
