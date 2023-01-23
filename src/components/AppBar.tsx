import * as React from 'react';
import {
  AppBar as AppBarMUI,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { APP_NAME } from '../settings';

const pages = [`¿Qué es ${APP_NAME}?`, '¿Quiénes somos?', 'Contactanos'];

const AppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const Home = () => (
    <>
      <IconButton aria-label="home" size="large">
        <AdbIcon fontSize="large" color="secondary" />
      </IconButton>
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          my: "auto",
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        {APP_NAME}
      </Typography>
    </>
  )

  const AppBarMD = () => (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Home />
      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => setAnchorElNav(null)}
          sx={{ my: 2 }}
        >
          <Typography>
            {page}
          </Typography>
        </Button>
      ))}
    </Box>
  )

  const AppBarXS = () => (
    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={(e) => setAnchorElNav(e.currentTarget)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={() => setAnchorElNav(null)}

      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={() => setAnchorElNav(null)}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
      <Home />
    </Box>
  )

  return (
    <AppBarMUI position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppBarXS />
          <AppBarMD />
        </Toolbar>
      </Container>
    </AppBarMUI>
  );
}

export default AppBar;