"use client"

import React, { useState, useEffect } from 'react';
import Rating from '@/rating'; // Ensure the path is correct
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

const Page = () => {
  const [showRating, setShowRating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRating(true);
    }, 10000); // Show rating after 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleRatingChange = (event, newValue) => {
    setShowRating(false); // Hide rating after user selects a star
  };

  return (
    <div style={{ display: 'flex', marginBottom:"10px", justifyContent: 'center', alignItems: 'center'}}>
      {showRating && (
        
        <div className='fade-in'>
          
          <Alert style= {{backgroundColor: 'transparent' }}icon={<CheckIcon fontSize="inherit"/>} severity="success">
            <Rating style={{ justifyContent: 'center', alignItems: 'center' }}onChange={handleRatingChange} />
            <Typography style={{ color: 'white' }}>How was your service?</Typography>
          </Alert>
          
        </div>
      )}
      <style jsx>{`
        .fade-in {
          opacity: 0;
          animation: fadeInUp 1s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Page;