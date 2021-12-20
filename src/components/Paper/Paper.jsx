import MuiPaper from '@mui/material/Paper'
import PropTypes from 'prop-types'
import { styled } from '@mui/material/styles'

const PaperRoot = styled(MuiPaper, {
   shouldForwardProp: (prop) => prop !== 'background' && prop !== 'padding',
})(({ theme, background, padding }) => ({
   backgroundColor: theme.palette.secondary[background],
   ...(padding && {
      padding: theme.spacing(1),
   }),
}))
const CustomPaper = (props) => {
   const { background, classes, className, padding = false, ...other } = props
   return (
      <PaperRoot
         elevation={0}
         background={background}
         padding={padding}
         className={className}
         {...other}
      />
   )
}

CustomPaper.propTypes = {
   background: PropTypes.oneOf(['dark', 'light', 'main']).isRequired,
   /**
    * Override or extend the styles applied to the component.
    */
   classes: PropTypes.object,
   className: PropTypes.string,
   padding: PropTypes.bool,
}

export default CustomPaper
