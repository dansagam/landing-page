import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const styles = {
   grid: {
      margin: '0 -15px !important',
      width: 'unset',
   },
}
const useStyles = makeStyles(styles)
const GridContainer = (props) => {
   const classes = useStyles()
   const { children, ...rest } = props
   return (
      <Grid container {...rest} className={classes.grid}>
         {children}
      </Grid>
   )
}

GridContainer.propTypes = {
   children: PropTypes.node,
}
export default GridContainer
