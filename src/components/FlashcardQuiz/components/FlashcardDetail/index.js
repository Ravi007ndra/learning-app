import React from 'react';
import { Box, Typography } from '@mui/material';

export default function FlashcardDetail({flashcard}) {
    return (
        <Box>
            <Typography variant='h5'>{flashcard.title}</Typography>
            <Typography>{flashcard.description}</Typography>
        </Box>
    )
}