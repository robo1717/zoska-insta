
"use client"; // Add this at the top

import * as React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // For Next.js routing
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { InfoOutlined, InfoRounded } from '@mui/icons-material';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const router = useRouter(); // Client-side routing

  return (
    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, left: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // Add navigation logic
          if (newValue === 0) router.push('/');
          if (newValue === 1) router.push('/profil');
          if (newValue === 2) router.push('/pridat');
          if (newValue === 3) router.push('/o-mne');
        }}
      >
        <BottomNavigationAction label="Domov" icon={<HomeRoundedIcon />} />
        <BottomNavigationAction label="Profil" icon={<AccountCircleRoundedIcon />} />
        <BottomNavigationAction label="Pridať príspevok" icon={<AddCircleRoundedIcon />} />
        <BottomNavigationAction label="O nás" icon={<InfoRounded />} />
      </BottomNavigation>
    </Box>
  );
}
