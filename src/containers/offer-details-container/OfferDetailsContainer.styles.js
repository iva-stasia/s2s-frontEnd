import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  container: {
    border: '1px solid #CFD8DC',
    borderRadius: '6px',
    padding: {
      md: '35px 60px 55px',
      xs: '15px 20px 10px'
    },
    marginTop: '20px'
  },
  title: (theme) => ({
    ...appTypography.h5,
    color: '#455A64',
    marginBottom: '30px',
    [theme.breakpoints.down('sm')]: {
      ...appTypography.h6,
      marginBottom: '10px'
    }
  })
}
