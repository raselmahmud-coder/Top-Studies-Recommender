import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

export default function UserInputForm({ onSubmit }) {
  const [userInput, setUserInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(userInput);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Enter your interests or background"
        variant="outlined"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button type="submit" variant="contained">
        Get Recommendations
      </Button>
    </Box>
  );
}