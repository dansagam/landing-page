/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
// import { Form } from 'formik'
import AppForm from '../../components/AppForm/AppForm'
import Typography from '../../components/Typography/Typography'
import GridContainer from '../../components/Grid/GridContainer/GridContainer'
import GridItem from '../../components/Grid/GridItem/GridItem'
import Input from '../../components/CustomInputs/Input'
import Button from '../../components/CustomButtons/Button'

const SignIn = () => (
   <AppForm>
      <>
         <Typography variant="h3" marked="none" align="center">
            Sign In
         </Typography>
         <Typography variant="body2" align="center">
            <Link href="/signup">New Here?</Link>
         </Typography>
      </>
      <form onSubmit="">
         {/* {({ handleSubmit }) => ( */}
         <Box
            component="form"
            onSubmit="handleSubmit"
            noValidate
            sx={{ mt: 6 }}
            color="primary"
         >
            <Input
               formControlProps={{ fullWidth: true }}
               labelText="email"
               id="email-id"
               inputProps={{
                  name: 'email',
                  required: true,
               }}
            />
            <Input
               formControlProps={{ fullWidth: true }}
               labelText="password"
               id="password-id"
               inputProps={{
                  name: 'password',
                  type: 'password',
               }}
               required
            />
            <GridContainer>
               <GridItem xs={12} sm={4} />
               <GridItem xs={12} sm={4}>
                  <Button
                     color="primary"
                     sx={{ mt: 3, mb: 2, textAlign: 'center' }}
                     type="submit"
                  >
                     Submit
                  </Button>
               </GridItem>
               <GridItem xs={12} sm={4} />
            </GridContainer>
         </Box>
         {/* )} */}
      </form>
   </AppForm>
)

export default SignIn
