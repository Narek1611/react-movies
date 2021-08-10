import React from 'react';
import { Link } from 'react-router-dom';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import SearchIcon from '@material-ui/icons/Search';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { removeFromLocalStorage } from '../../helpers/localStorage';
import { storage } from '../../constants/storage';
import { Routes } from '../../constants/routes';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  navBar:{
    background:'#9c0703',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  titleLogOut: {
    display: 'none',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      width: '145px',
    },
  },
  titleMenu: {
    display: 'block',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  titleFavorite: {
    display: 'block',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  search: {
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
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  homeIcon: {
    fontSize: '50px',
    color:'white',
  },
}));

export default function Navbar({ handleSearchInput, favCount }) {
  const classes = useStyles();

  function deleteIsAuth() {
    removeFromLocalStorage(storage.isAuth);
  }

  return (
    <div className={classes.grow}>
      <AppBar className={classes.navBar} position="static">
        <Toolbar>
          <Link to={Routes.home.url}>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <GroupWorkIcon className={classes.homeIcon} />
            </IconButton>
          </Link>
          <Link className={classes.title} to={Routes.home.url}>
            <Typography variant="overline" noWrap>
KINOPOISK
            </Typography>
          </Link>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={handleSearchInput}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link className={classes.title} to={Routes.favorite.url}>
              <IconButton color="inherit">
                <Badge color="secondary" badgeContent={favCount} max={10}>
                <FavoriteIcon />
                </Badge>
                <Typography variant="overline">Favorites</Typography>
              </IconButton>
                          </Link>
            <Link className={classes.titleLogOut} to={Routes.login.url}>
              <IconButton onClick={deleteIsAuth} color="inherit">
                <Badge>
                  <ExitToAppIcon />
                </Badge>
                <Typography variant="overline">Log Out</Typography>
              </IconButton>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <Link className={classes.titleFavorite} to={Routes.favorite.url}>
              <IconButton color="inherit">
                <Badge color="secondary" badgeContent={favCount} max={10}>
                  <FavoriteIcon />
                </Badge>
              </IconButton>
            </Link>
            <Link className={classes.titleMenu} to={Routes.login.url}>
              <IconButton onClick={deleteIsAuth} color="inherit">
                <Badge>
                  <ExitToAppIcon />
                </Badge>
              </IconButton>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  handleSearchInput: PropTypes.func.isRequired,
};
// import React from 'react';
// import { alpha, makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import { Typography } from '@material-ui/core';
// import GroupWorkIcon from '@material-ui/icons/GroupWork';
// import SearchIcon from '@material-ui/icons/Search';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import VpnKeyIcon from '@material-ui/icons/VpnKey';
// import MoreIcon from '@material-ui/icons/MoreVert';
// import { Link } from 'react-router-dom';
// const useStyles = makeStyles((theme) => ({
//   grow: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     display: 'none',
//     [theme.breakpoints.up('sm')]: {
//       display: 'block',
//     },
//   },
//   search: {
//     position: 'relative',
//     borderRadius: theme.shape.borderRadius,
//     backgroundColor: alpha(theme.palette.common.white, 0.15),
//     '&:hover': {
//       backgroundColor: alpha(theme.palette.common.white, 0.25),
//     },
//     marginRight: theme.spacing(2),
//     marginLeft: 0,
//     width: '100%',
//     [theme.breakpoints.up('sm')]: {
//       marginLeft: theme.spacing(25),
//       width: 'auto',
//     },
//   },
//   searchIcon: {
//     padding: theme.spacing(0, 2),
//     height: '100%',
//     position: 'absolute',
//     pointerEvents: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputRoot: {
//     color: 'inherit',
//   },
//   inputInput: {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//     transition: theme.transitions.create('width'),
//     width: '100%',
//     [theme.breakpoints.up('md')]: {
//       width: '20ch',
//     },
//   },
//   sectionDesktop: {
//     display: 'none',
//     [theme.breakpoints.up('md')]: {
//       display: 'flex',
//     },
//   },
//   sectionMobile: {
//     display: 'flex',
//     [theme.breakpoints.up('md')]: {
//       display: 'none',
//     },
//   },
//   loginName: {
//     fontSize: '25px',
//     margin: '5px',
//   },
//   navbarColor: {
//     background: '#AE0418',
//   },
// }));
// export default function PrimarySearchAppBar() {
//   const classes = useStyles();
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };
//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };
//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };
//   const menuId = 'primary-search-account-menu';
//   const renderMenu = (
//     <Menu
//       anchorEl={anchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={menuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMenuOpen}
//       onClose={handleMenuClose}
//     ></Menu>
//   );
//   const mobileMenuId = 'primary-search-account-menu-mobile';
//   const renderMobileMenu = (
//     <Menu
//       anchorEl={mobileMoreAnchorEl}
//       anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
//       id={mobileMenuId}
//       keepMounted
//       transformOrigin={{ vertical: 'top', horizontal: 'right' }}
//       open={isMobileMenuOpen}
//       onClose={handleMobileMenuClose}
//     >
//       <Link to="/favorite">
//         <MenuItem>
//           <IconButton color="inherit">
//             <FavoriteIcon />
//           </IconButton>
//           <p>Favorite</p>
//         </MenuItem>
//       </Link>
//       <Link to="/login">
//         <MenuItem>
//           <IconButton color="inherit">
//             <VpnKeyIcon />
//           </IconButton>
//           <p>Log In</p>
//         </MenuItem>
//       </Link>
//     </Menu>
//   );
//   return (
//     <div className={classes.grow}>
//       <AppBar position="static" className={classes.navbarColor}>
//         <Toolbar>
//           <Link to="/">
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="open drawer"
//             >
//               <GroupWorkIcon fontSize="large" />
//             </IconButton>
//           </Link>
//           <Link to='/'>
//           <Typography className={classes.title} variant="h6" noWrap>
//             KINOPOISK
//           </Typography>
//           </Link>
//           <div className={classes.search}>
//             <div className={classes.searchIcon}>
//               <SearchIcon />
//             </div>
//             <InputBase
//               placeholder="Search…"
//               classes={{
//                 root: classes.inputRoot,
//                 input: classes.inputInput,
//               }}
//               inputProps={{ 'aria-label': 'search' }}
//             />
//           </div>
//           <div className={classes.grow} />
//           <div className={classes.sectionDesktop}>
//             <Link to="/favorite">
//               <IconButton color="inherit">
//                 <p className={classes.loginName}>Favorite</p>
//                 <FavoriteIcon />
//               </IconButton>
//             </Link>
//             <Link to="/login">
//               <IconButton color="inherit">
//                 <p className={classes.loginName}>Log In</p>
//                 <VpnKeyIcon />
//               </IconButton>
//             </Link>
//           </div>
//           <div className={classes.sectionMobile}>
//             <IconButton
//               aria-controls={mobileMenuId}
//               aria-haspopup="true"
//               onClick={handleMobileMenuOpen}
//               color="inherit"
//             >
//               <MoreIcon />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//       {renderMobileMenu}
//       {renderMenu}
//     </div>
//   );
// }
