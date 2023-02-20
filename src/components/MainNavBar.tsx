import React from 'react';
import Titles from "./Titles";
import Matches from "./Matches";
import MainTable from "./MainTable";
import { AppBar, Box, Button, Container, IconButton, Toolbar, Typography } from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


type Pages = {
  name: string;
  state: number;
}

const pages: Pages[] = [
  {
    name: 'Titel',
    state: 1
  },
  {
    name: 'Spiele',
    state: 2
  },
  {
    name: 'Tabelle',
    state: 3
  } ];

const MainNavBAr = () => {

  const [ anchorElNav, setAnchorElNav ] = React.useState<null | HTMLElement>(null);
  const [ navState, setNavState ] = React.useState(0);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavClick = (navState: number) => {
    setNavState(navState);
    handleCloseNavMenu();
  }

  function showPageByNavState(navState: number) {
    switch ( navState ) {
      case 1:
        return <Titles
          key={ 'titles' }
        />
      case 2:
        return <Matches
          key={ 'matches' }
        />
      case 3:
        return <MainTable
          key={ 'mainTable' }
        />
      default:
        return <Titles
          key={ 'titles' }
        />
    }
  }

  return (
    <Container>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={ { display: { xs: 'none', md: 'flex' }, mr: 1 } }/>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={ {
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              } }
            >
              LOGO
            </Typography>

            <Box sx={ { flexGrow: 1, display: { xs: 'flex', md: 'none' } } }>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="inherit"
              >
                <MenuIcon/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={ anchorElNav }
                anchorOrigin={ {
                  vertical: 'bottom',
                  horizontal: 'left',
                } }
                keepMounted
                transformOrigin={ {
                  vertical: 'top',
                  horizontal: 'left',
                } }
                open={ Boolean(anchorElNav) }
                onClose={ handleCloseNavMenu }
                sx={ {
                  display: { xs: 'block', md: 'none' },
                } }
              >
                { pages.map((page) => (
                  <MenuItem key={ page.name } onClick={ () => handleNavClick(page.state) }>
                    <Typography textAlign="center">{ page.name }</Typography>
                  </MenuItem>
                )) }
              </Menu>
            </Box>
            <AdbIcon sx={ { display: { xs: 'flex', md: 'none' }, mr: 1 } }/>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={ {
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              } }
            >
              LOGO
            </Typography>
            <Box sx={ { flexGrow: 1, display: { xs: 'none', md: 'flex' } } }>
              { pages.map((page) => (
                <Button
                  key={ page.name }
                  onClick={ () => handleNavClick(page.state) }
                  sx={ { my: 2, color: 'white', display: 'block' } }
                >
                  { page.name }
                </Button>
              )) }
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <>
        <Container maxWidth="xl">
          { showPageByNavState(navState) }
        </Container>
      </>
    </Container>
  );
}

export default MainNavBAr;