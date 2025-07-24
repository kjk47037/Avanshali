import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const SocialIcon = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textDecoration: 'none',
  '&:hover': {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              AVANSHALI
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              We are dedicated to making a positive impact in communities worldwide through our 
              charitable initiatives and programs.
            </Typography>
            <Box sx={{ display: 'flex', mt: 2 }}>
              <SocialIcon aria-label="facebook">
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon aria-label="twitter">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon aria-label="instagram">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon aria-label="linkedin">
                <FaLinkedinIn />
              </SocialIcon>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Quick Links
            </Typography>
            <Box component="ul" sx={{ p: 0, listStyle: 'none' }}>
              {['About Us', 'Our Causes', 'Get Involved', 'Donate', 'Contact Us'].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <FooterLink href="#">{item}</FooterLink>
                </Box>
              ))}
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              123 Charity Street
              <br />
              New York, NY 10001
              <br />
              <br />
              Email: info@avanshali.org
              <br />
              Phone: +1 (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {'© '}
            {new Date().getFullYear()}
            {' Avanshali. All rights reserved.'}
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer; 