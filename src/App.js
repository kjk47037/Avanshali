import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh',
        bgcolor: 'background.default',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        maxWidth: '100vw', // Prevent horizontal overflow
      }}>
        <Header />
        <Box 
          component="main"
          sx={{ 
            position: 'relative',
            width: '100%'
          }}
        >
          <HeroSection />
          <StatsSection />
          <FeaturesSection />
          <CallToAction />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
