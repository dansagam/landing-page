import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'

const styles = {
   grid: {
      padding: '0 15px !important',
   },
}

const useStyles = makeStyles(styles)
const GridItem = (props) => {
   const classes = useStyles()
   const { children, ...rest } = props
   return (
      <Grid item {...rest} className={classes.grid}>
         {children}
      </Grid>
   )
}

GridItem.propTypes = {
   children: PropTypes.node,
}
export default GridItem
