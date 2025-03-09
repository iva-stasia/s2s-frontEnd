import appTypography from '~/styles/app-theme/app.typography'

export const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    borderRadius: '8px',
    border: '1px solid #CFD8DC'
  },
  img: {
    width: '35px',
    height: '35px',
    objectFit: 'cover'
  },
  tick: {
    width: '15px',
    height: '11px',
    objectFit: 'cover',
    margin: '15px 5px 0 0'
  },
  title: {
    ...appTypography.h6,
    color: '#607D8B'
  },
  element: {
    ...appTypography.li1,
    color: '#546E7A',
    marginTop: '10px'
  }
}
