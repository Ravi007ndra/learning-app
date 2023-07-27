import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { getFlashcards } from '../../../../services/flashcardService';

export default function QuizResult({ attemptedAnswers, onContinue }) {
    let alreadyKnew = attemptedAnswers.filter(item => item.answer === 'already-knew');
    let knewABit = attemptedAnswers.filter(item => item.answer === 'knew-a-bit');
    let noClue = attemptedAnswers.filter(item => item.answer === 'no-clue');

    return (
        <Box>
            <Typography variant="h3">Result</Typography>
            <ul>
                <li>Already knew: {alreadyKnew.length}</li>
                <li>Knew a bit: {knewABit.length}</li>
                <li>No clue: {noClue.length}</li>
            </ul>
            <Button onClick={onContinue}>Continue</Button>
            <Button>Done</Button>
        </Box>
    )
}