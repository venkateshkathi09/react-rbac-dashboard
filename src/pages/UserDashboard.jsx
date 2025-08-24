import { Typography, Box } from '@mui/material';
const UserDashboard = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        User Dashboard
      </Typography>
      <Typography>
        Welcome, User! You can view your profile, browse content, and interact with the system.
      </Typography>
    </Box>
  );
};

export default UserDashboard;
