import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  text: {
    ...appTypography.textBold,
    color: '#455A64'
  },
  date: {
    ...appTypography.li1,
    color: '#455A64',
    marginTop: '10px'
  },
  margin: {
    margin: {
      xs: '10px 0 0 0',
      md: '30px 10px 0 0'
    }
  }
}
