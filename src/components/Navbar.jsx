import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles'; 
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { role, logout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  return (
    <AppBar
      position="fixed"
      elevation={4}
      sx={{
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#1976d2',
      }}
    >
      <Toolbar
        sx={{
          minHeight: { xs: 56, sm: 64 },
          justifyContent: 'space-between',
          px: 2,
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: '1.2rem', cursor: 'pointer' }}
          onClick={() => navigate('/home')}
        >
          RBAC APP
        </Typography>

        <Box>
          {!role && (
                <div>
              <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/home')}>
                Home
              </Button>
              <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/login')}>
                Login
              </Button>
            </div>
          )}

          {role === 'admin' && (
            <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/admin')}>
              Admin Panel
            </Button>
          )}

          {(role === 'user' || role === 'admin') && (
            <Button color="inherit" sx={{ mx: 1 }} onClick={() => navigate('/user')}>
              User Dashboard
            </Button>
          )}

          {role && (
            <Button color="inherit" sx={{ mx: 1 }} onClick={handleLogout}>
              Logout
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
