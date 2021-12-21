import * as React from 'react'
import Toolbar from '@mui/material/Toolbar'
import { styled, alpha } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import MenuDiv from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'
import InputBase from '@mui/material/InputBase'
import { NavLink } from 'react-router-dom'
import Box from '@mui/material/Box'
import SearchIcon from '@mui/icons-material/Search'
import MoreIcon from '@mui/icons-material/MoreVert'
import Menu from '@mui/icons-material/Menu'
import AppBar from '../AppBar/AppBar'
import Typography from '../Typography/Typography'
// import CustomInput from '../CustomInputs/Input'

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
}))
const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))
const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}))
const Navbars = () => {
   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
   // eslint-disable-next-line no-unused-vars
   const [auth, setAuth] = React.useState(false)
   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

   const mobileMenuId = 'primary-search-account-menu-mobile'

   const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null)
   }

   const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget)
   }
   const MobileProfileMenu = (
      <MenuDiv
         anchorEl={mobileMoreAnchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={mobileMenuId}
         keepMounted
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         open={isMobileMenuOpen}
         onClose={handleMobileMenuClose}
      >
         <MenuItem onClick={handleMobileMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMobileMenuClose}>My account</MenuItem>
      </MenuDiv>
   )
   return (
      <>
         <AppBar color="secondary" light enableColorOnDark position="fixed">
            <Toolbar>
               <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
               >
                  <Menu />
               </IconButton>
               <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
               >
                  <NavLink
                     to="/"
                     style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                     Landing Page
                  </NavLink>
               </Typography>
               <Search>
                  <SearchIconWrapper>
                     <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                     placeholder="Search…"
                     inputProps={{ 'aria-label': 'search' }}
                  />
               </Search>
               <Box
                  sx={{
                     flex: 1,
                     display: { xs: 'none', md: 'flex' },
                     justifyContent: 'flex-end',
                  }}
               >
                  <Link
                     href="/signin"
                     color="inherit"
                     variant="h6"
                     underline="none"
                     sx={{ mr: 3 }}
                  >
                     SignIn
                  </Link>
                  <Link
                     href="/signup"
                     color="inherit"
                     variant="h6"
                     underline="none"
                  >
                     Sign Up
                  </Link>
               </Box>
               <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                     aria-label="show more"
                     aria-controls={mobileMenuId}
                     onClick={handleMobileMenuOpen}
                     color="inherit"
                  >
                     <MoreIcon />
                  </IconButton>
               </Box>
            </Toolbar>
         </AppBar>
         {auth ? MobileProfileMenu : ''}
         {MobileProfileMenu}
      </>
   )
}

export default Navbars
