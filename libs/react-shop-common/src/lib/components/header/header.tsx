import { useState } from 'react';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  Stack,
  Toolbar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { logo } from '../../assets';
import HeaderButton from './header-button/headerButton';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        paddingX: 3,
        paddingY: 1,
        backgroundColor: (theme) => theme.palette.background.paper,
        color: (theme) =>
          theme.palette.getContrastText(theme.palette.background.paper),
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* small logo and menu */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="list menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="primary"
                onClick={handleOpenNavMenu}
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
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Salwar Kameez
                </HeaderButton>
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Gowns
                </HeaderButton>
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Lehengas
                </HeaderButton>
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Sarees
                </HeaderButton>
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Kurta Sets
                </HeaderButton>
                <HeaderButton sx={{ my: 2, display: 'block' }}>
                  Collections
                </HeaderButton>
              </Menu>
            </Box>
            <img
              src={logo}
              alt="logo"
              style={{ width: '4rem', height: '3rem', marginInline: '1rem' }}
            />
          </Box>
          {/* large logo and menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              flexGrow: 1,
              alignItems: 'center',
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{ width: '4rem', height: '3rem', marginInline: '1rem' }}
            />

            <Stack direction="row" justifyContent="space-around" flexGrow={1}>
              <HeaderButton>Salwar Kameez</HeaderButton>
              <HeaderButton>Gowns</HeaderButton>
              <HeaderButton>Lehengas</HeaderButton>
              <HeaderButton>Sarees</HeaderButton>
              <HeaderButton>Kurta Sets</HeaderButton>
              <HeaderButton>Collections</HeaderButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
