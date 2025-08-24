import React, { useState } from 'react';
import { Container, Box, Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LoginUser from '../api/auth';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
   
  const { login } = useAuth(); // login should handle both token + role

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await LoginUser({ email, password });

      if (res.token && res.role) {
        login(res.token, res.role); // updates context + localStorage
        navigate(res.role === 'admin' ? '/admin' : '/user');
      } else {
        setError('Invalid response from server.');
      }
    } catch (err) {
      setError(err?.error || 'Invalid email or password');
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, textAlign: 'center' }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name='email'
            value={email}
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />

          <TextField
            label="Password"
            type="password"
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
            sx={{ mb: 2 }}
          />

          {error && (
            <Typography color="error" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button variant="contained" type="submit" fullWidth>
            LOGIN
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Login;
