// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" py={3} bgcolor="text.secondary" color="white">
      <Container>
        <Typography variant="body1" align="center">
          &copy; 2024 My E-commerce Website
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
