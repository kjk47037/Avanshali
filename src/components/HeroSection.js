import React from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const StyledHeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '85vh',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.down('md')]: {
    paddingBottom: theme.spacing(20),
  },
}));

const HeroContent = styled(Box)(({ theme }) => ({
  zIndex: 2,
  position: 'relative',
  paddingLeft: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    paddingLeft: 0,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const CircleElement = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '150px',
  left: '-60px',
  width: '122px',
  height: '122px',
  borderRadius: '50%',
  backgroundColor: theme.palette.background.default,
  opacity: 0.8,
  zIndex: 1,
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    left: '10px',
    top: '100px',
  },
}));

const ImageSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: theme.spacing(4),
  },
}));

const CircleBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '0',
  bottom: '0',
  width: '100%',
  height: '100%',
  maxWidth: '700px',
  maxHeight: '700px',
  borderTopLeftRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  zIndex: 0,
  transform: 'translate(30%, 30%)',
  [theme.breakpoints.down('lg')]: {
    transform: 'translate(20%, 30%)',
  },
  [theme.breakpoints.down('md')]: {
    transform: 'translate(30%, 40%)',
    maxWidth: '500px',
    maxHeight: '500px',
  },
}));

const CurvedLine = styled(Box)(({ theme }) => ({
  position: 'absolute',
  right: '50px',
  top: '70px',
  width: '120px',
  height: '120px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.text.primary}`,
  borderLeft: 'none',
  borderBottom: 'none',
  zIndex: 1,
  transform: 'rotate(45deg)',
  [theme.breakpoints.down('md')]: {
    width: '80px',
    height: '80px',
    right: '20px',
    top: '40px',
  },
}));

const DiagonalLine = ({ bottom }) => (
  <Box sx={{ 
    position: 'absolute',
    bottom: `${bottom}px`,
    width: '80px',
    height: '2px',
    backgroundColor: '#3E1A01',
    transform: 'rotate(-45deg)',
    left: 0,
    '@media (max-width: 900px)': {
      width: '60px',
    }
  }} />
);

// Circular photo image
const CircularImage = styled(Box)(({ theme }) => ({
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  overflow: 'hidden',
  position: 'relative',
  zIndex: 2,
  border: '10px solid #FFFFFF',
  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  [theme.breakpoints.down('lg')]: {
    width: '350px',
    height: '350px',
  },
  [theme.breakpoints.down('md')]: {
    width: '280px',
    height: '280px',
    border: '8px solid #FFFFFF',
  },
  [theme.breakpoints.down('sm')]: {
    width: '240px',
    height: '240px',
    border: '6px solid #FFFFFF',
  },
}));

// Striped decorative circle (now positioned absolutely behind the image)
const StripedCircle = styled(Box)(({ theme }) => ({
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  position: 'absolute',
  top: '120px',
  left: '-40px',
  zIndex: 1,
  backgroundImage: `repeating-linear-gradient(45deg, #3E1A01 0 4px, transparent 4px 20px)`,
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    width: '350px',
    height: '350px',
    top: '0',
    left: '-50px',
  },
  [theme.breakpoints.down('md')]: {
    width: '280px',
    height: '280px',
    top: '0',
    left: '-40px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '240px',
    height: '240px',
    top: '0',
    left: '-30px',
  },
}));

const MissionButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderRadius: '30px',
  padding: '12px 32px',
  fontWeight: 500,
  fontSize: '16px',
  textTransform: 'uppercase',
  boxShadow: 'none',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    boxShadow: 'none',
  },
}));

const HeroSection = () => {
  return (
    <StyledHeroContainer>
      <CircleElement />
      <CircleBackground />
      
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <HeroContent>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                style={{ width: '100%', maxWidth: '500px' }}
              >
                <Typography 
                  variant="h1" 
                  component="h1" 
                  color="text.primary"
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.2,
                  }}
                >
                  Offering aid to the less fortunate
                </Typography>
                
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  sx={{ mb: 4, fontSize: '1.1rem', maxWidth: '500px' }}
                >
                  It is about giving back to the community, and making the world a better place
                </Typography>
                
                <MissionButton
                  variant="contained" 
                  disableElevation
                >
                  OUR MISSION
                </MissionButton>
              </motion.div>
            </HeroContent>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <ImageSection sx={{ ml: 35 }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration:1, delay: 0.2 }}
                style={{ position: 'relative' }}
              >
                <CurvedLine />
                {/* <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <DiagonalLine bottom={10} />
                  <DiagonalLine bottom={25} />
                  <DiagonalLine bottom={40} />
                  <DiagonalLine bottom={55} />
                </Box> */}
                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <StripedCircle />
                  <CircularImage>
                    <img 
                      src="/images/child-running.jpg" 
                      alt="Child running" 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=800";
                      }}
                    />
                  </CircularImage>
                </Box>
              </motion.div>
            </ImageSection>
          </Grid>
        </Grid>
      </Container>
    </StyledHeroContainer>
  );
};

export default HeroSection; 