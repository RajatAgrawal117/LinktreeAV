import React from 'react';
import { Box, Button, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Boxes } from '../components/ui/Boxes';

const ProfileCard = () => {
  const navigate = useNavigate();

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
    <Box
      sx={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        backgroundColor: '#181818',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        textAlign: 'center',
        minHeight: '80vh',
        color: '#FFC107',
        overflow: 'hidden', // To ensure pseudo-element stays within bounds
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(club-logo.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3, // Adjust opacity as needed
          zIndex: 0,
        },
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Anirveda PDEU
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          The TechnoEconomics Club of PDEU
          <br />
          Gandhinagar, Gujarat
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          
          <IconButton aria-label="Twitter" sx={{ color: '#FFC107' }} onClick={() => handleRedirect('https://x.com/Anirveda_pdeu')}>
            <TwitterIcon />
          </IconButton>
          <IconButton aria-label="Instagram" sx={{ color: '#FFC107' }} onClick={() => handleRedirect('https://www.instagram.com/anirveda_pdeu/')}>
            <InstagramIcon />
          </IconButton>
          <IconButton aria-label="Facebook" sx={{ color: '#FFC107' }} onClick={() => handleRedirect('https://www.facebook.com/p/Anirveda-The-Economics-and-Engineering-Club-of-PDPU-100068031561528/')}>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="LinkedIn" sx={{ color: '#FFC107' }} onClick={() => handleRedirect('https://www.linkedin.com/company/anirveda-the-technoeconomics-club/')}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: '80%',
            margin: '10px 0',
            backgroundColor: '#FFC107',
            color: '#181818',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFD54F',
            },
          }}
          onClick={() => handleRedirect('https://www.linkedin.com/company/anirveda-the-technoeconomics-club/')}
        >
          LINKEDIN
        </Button>
        
        <Button
          variant="contained"
          sx={{
            width: '80%',
            margin: '10px 0',
            backgroundColor: '#FFC107',
            color: '#181818',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFD54F',
            },
          }}
          onClick={() => handleRedirect('https://x.com/Anirveda_pdeu')}
        >
          TWITTER
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '80%',
            margin: '10px 0',
            backgroundColor: '#FFC107',
            color: '#181818',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFD54F',
            },
          }}
          onClick={() => handleRedirect('https://www.instagram.com/anirveda_pdeu/')}
        >
          INSTAGRAM
        </Button>
        <Button
          variant="contained"
          sx={{
            width: '80%',
            margin: '10px 0',
            backgroundColor: '#FFC107',
            color: '#181818',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: '#FFD54F',
            },
          }}
          onClick={() => handleRedirect('https://www.facebook.com/p/Anirveda-The-Economics-and-Engineering-Club-of-PDPU-100068031561528/')}
        >
          FACEBOOK
        </Button>
      </Box>
    </Box>
    
    </>
  );
};

export default ProfileCard;
