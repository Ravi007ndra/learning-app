import React from 'react';
import { Box, Button } from '@mui/material';


export default function FlashcardAnswers({ onAnswer }) {
    
   
    return (
        <Box>
            <Button onClick={() => onAnswer("already-knew")}>Already knew</Button>
            <Button onClick={() => onAnswer("knew-a-bit")}>Knew a bit</Button>
            <Button onClick={() => onAnswer("no-clue")}>No clue</Button>
        </Box>
    )
}