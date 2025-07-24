import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.shape.borderRadius,
  textAlign: 'center',
  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: `linear-gradient(135deg, ${theme.palette.secondary.main}22 0%, transparent 50%)`,
    zIndex: -1,
  },
}));

const CallToAction = ({ 
  title = "Ready to make a difference?", 
  description = "Join us in our mission to help those in need and create a better world for everyone.",
  buttonText = "Get Involved",
  buttonColor = "primary"
}) => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <StyledPaper>
            <Typography 
              variant="h3" 
              component="h2" 
              color="text.primary"
              fontWeight="bold"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary"
              sx={{ mb: 4, maxWidth: '600px', mx: 'auto' }}
            >
              {description}
            </Typography>
            <Button 
              variant="contained" 
              color={buttonColor}
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              {buttonText}
            </Button>
          </StyledPaper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default CallToAction; 