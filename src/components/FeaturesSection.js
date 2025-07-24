import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';

const SectionTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontSize: '1rem',
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 700,
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.8rem',
    maxWidth: '100%',
    padding: '0 16px',
  },
}));

const FeatureCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.light,
  padding: theme.spacing(4),
  borderRadius: 8,
  boxShadow: 'none',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(3),
  },
}));

const FeatureGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(3),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3),
    padding: '0 16px',
  },
}));

const FeatureDivider = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '2px',
  backgroundColor: theme.palette.text.primary,
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const DecorationCircle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '50px',
  left: '-50px',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  backgroundColor: theme.palette.secondary.main,
  zIndex: 0,
  opacity: 0.7,
  [theme.breakpoints.down('md')]: {
    width: '100px',
    height: '100px',
    bottom: '30px',
    left: '-30px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const DecorationCurve = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: '20px',
  left: '80px',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  border: `2px solid ${theme.palette.text.primary}`,
  borderTop: 'none',
  borderLeft: 'none',
  zIndex: 1,
  transform: 'rotate(135deg)',
  [theme.breakpoints.down('md')]: {
    width: '100px',
    height: '100px',
    bottom: '10px',
    left: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

const HeartIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 32L15.8 30.025C8.4 23.35 3.6 18.975 3.6 13.6C3.6 9.225 7.025 5.8 11.4 5.8C13.775 5.8 16.075 6.875 18 8.675C19.925 6.875 22.225 5.8 24.6 5.8C28.975 5.8 32.4 9.225 32.4 13.6C32.4 18.975 27.6 23.35 20.2 30.025L18 32Z" fill="#3E1A01" />
  </svg>
);

const PeopleIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 18C26.205 18 28 16.205 28 14C28 11.795 26.205 10 24 10C21.795 10 20 11.795 20 14C20 16.205 21.795 18 24 18ZM12 18C14.205 18 16 16.205 16 14C16 11.795 14.205 10 12 10C9.795 10 8 11.795 8 14C8 16.205 9.795 18 12 18ZM12 22C8.7 22 2 23.65 2 27V30H22V27C22 23.65 15.3 22 12 22ZM24 22C23.65 22 23.25 22.025 22.85 22.075C24.7 23.25 26 24.8 26 27V30H34V27C34 23.65 27.3 22 24 22Z" fill="#3E1A01" />
  </svg>
);

const GlobeIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3C9.72 3 3 9.72 3 18C3 26.28 9.72 33 18 33C26.28 33 33 26.28 33 18C33 9.72 26.28 3 18 3ZM16.5 28.5C11.34 27.81 7.5 23.34 7.5 18C7.5 17.19 7.605 16.41 7.77 15.66L13.5 21.39V22.5C13.5 24.15 14.85 25.5 16.5 25.5V28.5ZM25.95 25.185C25.62 24.015 24.57 23.175 23.25 23.175H22.5V20.175C22.5 19.35 21.825 18.675 21 18.675H12V15.675H15C15.825 15.675 16.5 15 16.5 14.175V11.175H19.5C21.15 11.175 22.5 9.825 22.5 8.175V7.605C26.19 9.195 28.5 13.29 28.5 18C28.5 20.895 27.555 23.535 25.95 25.185Z" fill="#3E1A01" />
  </svg>
);

const PlantIcon = () => (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.49 15C21.09 15 18.99 16.35 17.995 18.375C17.72 16.08 15.765 14.25 13.5 14.25C11.015 14.25 9 16.265 9 18.75C9 21.235 11.015 23.25 13.5 23.25H13.875L15 31.5H21L22.125 23.25H23.49C25.975 23.25 27.99 21.235 27.99 18.75C27.99 16.265 25.975 15 23.49 15ZM23.49 20.25H20.385L19.26 28.5H16.74L15.615 20.25H13.5C12.675 20.25 12 19.575 12 18.75C12 17.925 12.675 17.25 13.5 17.25C14.325 17.25 15 17.925 15 18.75H18C18 16.695 19.68 15 21.75 15H23.49C24.315 15 24.99 15.675 24.99 16.5C24.99 17.325 24.315 18 23.49 18C22.665 18 21.99 17.325 21.99 16.5H18.99C18.99 16.845 19.035 17.175 19.11 17.505C19.455 17.175 19.875 16.92 20.325 16.755C20.7 16.65 21.075 16.575 21.465 16.545C21.63 16.53 21.795 16.515 21.99 16.515V19.515C21.96 19.515 21.93 19.515 21.9 19.53C21.87 19.53 21.84 19.53 21.81 19.545C21.63 19.575 21.465 19.62 21.3 19.695C20.955 19.875 20.685 20.115 20.505 20.4C21.345 20.625 22.38 20.25 23.49 20.25Z" fill="#3E1A01" />
    <path d="M20.25 9.75H16.5C16.5 7.68 14.82 6 12.75 6H9V9.75C9 11.82 10.68 13.5 12.75 13.5H16.5C16.5 15.57 18.18 17.25 20.25 17.25H24V13.5C24 11.43 22.32 9.75 20.25 9.75Z" fill="#3E1A01" />
  </svg>
);

const features = [
  {
    icon: <HeartIcon />,
    title: 'Direct Help',
    description: 'Charities empower people to make a difference, even if it is just in a small way',
  },
  {
    icon: <PeopleIcon />,
    title: 'Giving Information',
    description: 'People who are passionate about a cause are the ones who can make the most difference',
  },
  {
    icon: <GlobeIcon />,
    title: 'Raising Awareness',
    description: 'Your voice and your actions matter, and you can make a difference in the world',
  },
  {
    icon: <PlantIcon />,
    title: 'Relieving Poverty',
    description: 'When people come together to work for a common cause, they can achieve great things',
  },
];

const FeatureItem = ({ icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <FeatureCard>
        <Box sx={{ p: 0 }}>
          <Box sx={{ mb: 2 }}>
            {icon}
          </Box>
          <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
            {title}
          </Typography>
          <FeatureDivider />
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </FeatureCard>
    </motion.div>
  );
};

const FeaturesSection = () => {
  return (
    <Box component="section" sx={{ py: { xs: 6, md: 8 }, mt: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden' }}>
      <DecorationCircle />
      <DecorationCurve />
      
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle variant="subtitle1" component="h2">
            OUR FEATURES
          </SectionTitle>
          <SectionHeading variant="h3" component="h2" sx={{ mb: { xs: 4, md: 8 } }}>
            You can make a difference by supporting a charity that you care about
            <br />
            Your donation can help to change lives.
          </SectionHeading>
        </motion.div>

        <FeatureGrid>
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              index={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </FeatureGrid>
      </Container>
    </Box>
  );
};

export default FeaturesSection; 