import HomeLayout from '../HomeLayout/HomeLayout'
import Typography from '../../Typography/Typography'

const backgroundImage = '/ocean-apr27-2020-Cidy-Chai-North-Pacific-sq.jpeg'
const HomeView = () => (
   <HomeLayout
      sxBackground={{
         backgroundImage: `url(${backgroundImage})`,
         backgroundColor: '#7fc7d9',
         backgroundPosition: 'center',
      }}
   >
      <img
         src={backgroundImage}
         alt="increase priority"
         style={{ display: 'none' }}
      />
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
         Discover the experience
      </Typography>
   </HomeLayout>
)

export default HomeView
