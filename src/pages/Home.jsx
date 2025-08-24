import { Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ pt: 10, px: 2, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Welcome to the RBAC APP
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This is demo app for Role based access control.
      </Typography>
      <Button variant="contained" onClick={() => navigate('/login')}>
        Get Started
      </Button>
    </Box>
  );
};

export default Home;
