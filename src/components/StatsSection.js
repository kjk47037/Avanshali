import React from 'react';
import { Box, Container, Grid, Typography, Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const StatsCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.05)',
  borderRadius: 12,
  position: 'relative',
  marginTop: theme.spacing(-10),
  zIndex: 10,
  overflow: 'hidden', // Changed from 'visible' to 'hidden'
  width: '100%',
}));

const StatsContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
}));

const StatsGridSection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexBasis: '75%',
  [theme.breakpoints.down('lg')]: {
    flexBasis: '70%',
  },
  [theme.breakpoints.down('md')]: {
    flexBasis: '100%',
  },
}));

const CTASection = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexBasis: '25%',
  [theme.breakpoints.down('lg')]: {
    flexBasis: '30%',
  },
  [theme.breakpoints.down('md')]: {
    flexBasis: '100%',
  },
}));

const StatItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: theme.spacing(4, 2),
  flex: 1,
}));

const StatValue = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 700,
  color: theme.palette.secondary.main,
  marginBottom: theme.spacing(1),
}));

const StatLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.text.primary,
  fontWeight: 500,
}));

const CallToAction = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4, 3),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  borderRadius: '0 12px 12px 0',
  [theme.breakpoints.down('md')]: {
    borderRadius: '0 0 12px 12px',
  },
}));

const ActionLink = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textTransform: 'none',
  padding: 0,
  fontWeight: 400,
  fontSize: '0.875rem',
  alignSelf: 'flex-start',
  marginTop: theme.spacing(1),
  '&:hover': {
    backgroundColor: 'transparent',
  },
  '& .MuiButton-endIcon': {
    marginLeft: theme.spacing(0.5),
  },
}));

const StatsSection = () => {
  return (
    <Container maxWidth="lg" sx={{ mb: 10 }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <StatsCard>
          <StatsContainer container>
            <StatsGridSection item>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <StatItem>
                    <StatValue>20M</StatValue>
                    <StatLabel>Number of Supporters</StatLabel>
                  </StatItem>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatItem>
                    <StatValue>15K+</StatValue>
                    <StatLabel>Volunteers Worldwide</StatLabel>
                  </StatItem>
                </Grid>
                <Grid item xs={12} md={4}>
                  <StatItem>
                    <StatValue>68K+</StatValue>
                    <StatLabel>We've Helped Raise</StatLabel>
                  </StatItem>
                </Grid>
              </Grid>
            </StatsGridSection>
            <CTASection item>
              <CallToAction>
                <Typography variant="h6" component="h3" fontWeight={600} sx={{ mb: 0.5 }}>
                  Our Goal is to Help Poor People
                </Typography>
                <ActionLink 
                  endIcon={<ArrowForwardIcon />}
                >
                  become volunteer
                </ActionLink>
              </CallToAction>
            </CTASection>
          </StatsContainer>
        </StatsCard>
      </motion.div>
    </Container>
  );
};

export default StatsSection;