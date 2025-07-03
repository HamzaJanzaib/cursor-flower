"use client"
import PromoBanner from '@/Components/PromoBanner';
import React, { useState } from 'react';

function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <PromoBanner
        setClose={setShowBanner}
          onClaim={() => {
            alert('Offer Claimed!');
            setShowBanner(false);  
          }}
        />
      )}
      {/* rest of your Home */}
    </>
  );
}

export default Home;
