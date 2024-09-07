"use client"
import { useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import UserInputForm from './components/UserInputForm';
import RecommendationList from './components/RecommendationList';

export default function Home() {
  const [recommendations, setRecommendations] = useState([]);

  const handleSubmit = async (userInput) => {
    // TODO: Replace this with actual API call to your ML model
    const mockRecommendations = [
      { study: 'Machine Learning Basics', probability: 0.95 },
      { study: 'Deep Learning Fundamentals', probability: 0.85 },
      { study: 'Natural Language Processing', probability: 0.75 },
      { study: 'Computer Vision', probability: 0.65 },
      { study: 'Reinforcement Learning', probability: 0.55 },
    ];
    setRecommendations(mockRecommendations);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Top Recommended Studies
        </Typography>
        <UserInputForm onSubmit={handleSubmit} />
        <RecommendationList recommendations={recommendations} />
      </Box>
    </Container>
  );
}