import { List, ListItem, ListItemText, Typography, Box } from '@mui/material';

export default function RecommendationList({ recommendations }) {
  if (recommendations.length === 0) {
    return null;
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Recommended Studies
      </Typography>
      <List>
        {recommendations.map((rec, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={rec.study}
              secondary={`Probability: ${(rec.probability * 100).toFixed(2)}%`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}