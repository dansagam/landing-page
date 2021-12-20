/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Form } from 'formik'
import AppForm from '../../components/AppForm/AppForm'
import Typography from '../../components/Typography/Typography'
import GridContainer from '../../components/Grid/GridContainer/GridContainer'
import GridItem from '../../components/Grid/GridItem/GridItem'
import Input from '../../components/CustomInputs/Input'
import Button from '../../components/CustomButtons/Button'

const SignUp = () => (
   <AppForm>
      <>
         <Typography variant="h3" marked="center" align="center">
            SignUp
         </Typography>
         <Typography variant="body2" align="center">
            <Link href="#">Already have an account?</Link>
         </Typography>
      </>
      <Form onSubmit="">
         {({ handleSubmit }) => (
            <Box
               component="form"
               onSubmit={handleSubmit}
               noValidate
               sx={{ mt: 6 }}
            >
               <GridContainer>
                  <GridItem xs={12} sm={6}>
                     <Input
                        name="firstName"
                        formControlProps={{ fullWidth: false }}
                        labelText="First Name"
                        required
                        id="firstNameId"
                     />
                  </GridItem>
                  <GridItem xs={12} sm={6}>
                     <Input
                        name="lastName"
                        formControlProps={{ fullWidth: false }}
                        labelText="Last Name"
                        required
                        id="firstNameId"
                     />
                  </GridItem>
               </GridContainer>
               <Input
                  formControlProps={{ fullWidth: true }}
                  labelText="email"
                  id="email-id"
                  name="email"
                  required
               />
               <Input
                  formControlProps={{ fullWidth: true }}
                  labelText="password"
                  id="password-id"
                  name="password"
                  type="password"
                  required
               />
               <Button
                  color="primary"
                  sx={{ mt: 3, mb: 2 }}
                  round
                  type="submit"
               >
                  Submit
               </Button>
            </Box>
         )}
      </Form>
   </AppForm>
)

export default SignUp
