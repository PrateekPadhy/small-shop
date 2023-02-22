import { AppBar, Toolbar, Typography } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ paddingX: 2, paddingY: 1 }}>
      <Toolbar disableGutters>
        <AdbIcon sx={{ fontSize: '2rem' }}></AdbIcon>
        <Typography
          variant="h5"
          noWrap
          sx={{
            fontFamily: 'monospace',
            fontWeight: '700',
            letterSpacing: '0.2rem',
            textDecoration: 'none',
            paddingLeft: 1,
          }}
        >
          Small Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
