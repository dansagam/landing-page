import PropTypes from 'prop-types'
// eslint-disable-next-line no-unused-vars
import { experimentalStyled as styled, makeStyles } from '@mui/material/styles'
import MuiFormControl from '@mui/material/FormControl'
import MuiInputLabel from '@mui/material/InputLabel'
import MuiInput from '@mui/material/Input'
import ClearIcon from '@mui/icons-material/Clear'
import CheckIcon from '@mui/icons-material/Check'
import styles from './customInputStyles'

// eslint-disable-next-line no-unused-vars
const FormControlRoot = styled(MuiFormControl)(({ theme }) => ({
   // paddingBottom: '10px',
   // margin: '27px 0 0 0',
   // position: 'relative',
   // verticalAlign: 'unset',
   ...styles.formControl,
}))

const InputLabelRoot = styled(MuiInputLabel, {
   shouldForwardProp: (prop) => prop !== 'error' && prop !== 'success',
})(({ error, success }) => ({
   ...(error && styles.labelRootError),
   ...styles.labelRoot,
   ...(success && !error && styles.labelRootSuccess),
}))
const InputRoot = styled(MuiInput)(
   ({ error, success, labelText, disabled }) => ({
      ...styles.underline,
      marginTop: '16px',
      ...(labelText === undefined && styles.marginTop),
      ...(error && styles.underlineError),
      ...(success && !error && styles.underlineSuccess),
      ...(disabled && styles.disabled),
   })
)
const ClearIconRoot = styled(ClearIcon)(() => ({
   ...styles.feedback,
   ...styles.labelRootError,
}))
const CheckIconRoot = styled(CheckIcon)(() => ({
   ...styles.feedback,
   ...styles.labelRootSuccess,
}))
const CustomInput = (props) => {
   const {
      formControlProps,
      labelText,
      id,
      labelProps,
      inputProps,
      error,
      success,
      // eslint-disable-next-line no-unused-vars
      rtlActive,
      // disabled,
   } = props

   const newInputProps = {
      maxLength:
         inputProps && inputProps.maxLength ? inputProps.maxLength : undefined,
      minLength:
         inputProps && inputProps.minLength ? inputProps.minLength : undefined,
      step: inputProps && inputProps.step ? inputProps.step : undefined,
   }
   return (
      <FormControlRoot
         {...formControlProps}
         className={formControlProps.className}
      >
         {labelText !== undefined ? (
            <InputLabelRoot
               htmlFor={id}
               {...labelProps}
               error={error}
               success={success}
            >
               {labelText}
            </InputLabelRoot>
         ) : null}
         <InputRoot
            id={id}
            {...inputProps}
            inputProps={newInputProps}
            error={error}
            success={success}
            // disabled={disabled}
            labelText={labelText}
         />
         {error ? <ClearIconRoot /> : success ? <CheckIconRoot /> : null}
      </FormControlRoot>
   )
}

CustomInput.propTypes = {
   labelText: PropTypes.node,
   labelProps: PropTypes.object,
   id: PropTypes.string,
   inputProps: PropTypes.object,
   formControlProps: PropTypes.object,
   error: PropTypes.bool,
   success: PropTypes.bool,
   rtlActive: PropTypes.bool,
   disabled: PropTypes.bool,
}

export default CustomInput
