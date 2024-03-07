import * as React from 'react';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';

export default function BasicButtons() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button>Button 000000 </Button>
      <Button disabled>Disabled</Button>
      <Button loading>Loading</Button>
      <Button >Click me</Button>
      
    </Box>
  );
}
