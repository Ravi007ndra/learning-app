import React from 'react';
import { Box } from '@mui/material';

import ActiveFlashcardCount from './components/ActiveFlashcardCount';
import FlashcardDetail from './components/FlashcardDetail';
import FlashcardAnswers from './components/FlashcardAnswers';
import QuizResult from './components/QuizResult';

export default function FlashcardQuiz({ flashcards, onContinue }) {
    
    const [attemptedAnswers, setAttemptedAnswers] = React.useState([]);

    const attempted = attemptedAnswers.length;

    function setAnswer(answer) {
        
        setAttemptedAnswers([
            ...attemptedAnswers,
            { flashcardID: flashcards[attempted].id, answer }
        ])
    }

    function resetAttemptedAnswers() {
        setAttemptedAnswers([]);
        onContinue()
    }

    return (
        <Box>
            {
                attempted < flashcards.length &&
                <Box>
                    <ActiveFlashcardCount active={attempted + 1} total={flashcards.length} />
                    <FlashcardDetail flashcard={flashcards[attempted]} />
                    <FlashcardAnswers
                        flashcardID={flashcards[attempted].id}
                        onAnswer={setAnswer}
                        />
                        {attempted}
                </Box>
            }

            {
                attempted === flashcards.length &&
                <QuizResult attemptedAnswers={attemptedAnswers} onContinue={resetAttemptedAnswers} />
            }

        </Box>

    )
}