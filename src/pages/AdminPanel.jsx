import { Typography, Box } from '@mui/material';

const AdminPanel = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Panel
      </Typography>
      <Typography>
        Welcome to the admin panel.. here you can manage all the users
      </Typography>
    </Box>
  );
};

export default AdminPanel;
