import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CircularProgress, Box } from '@mui/material';

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { role, loading } = useAuth(); // if  you have a loading state
  const location = useLocation();

  // While auth is loading, show spinner
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
        <CircularProgress />
      </Box>
    );
  }

  // If no role (not logged in), redirect to login
  if (!role) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If role is not authorized, redirect to unauthorized page
  if (!allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
};

export default ProtectedRoute;
