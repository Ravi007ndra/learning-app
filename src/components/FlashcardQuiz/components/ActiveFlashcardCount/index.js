import React from 'react';
import { Box } from '@mui/material';

export default function ActiveFlashcardCount({active, total}) {
    return (
        <Box>{active} of {total}</Box>
    )
}