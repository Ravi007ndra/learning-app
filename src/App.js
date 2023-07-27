// import React from 'react';
// import { Container } from '@mui/material';
import React from 'react';
import SuggestionList from './components/SuggestionList';
import { users } from './database/db';


// import SubjectWithFlashcardList from './components/SubjectWithFlashcardList';
// import SelectActiveUser from './components/SelectActiveUser';
// import CreateUser from './components/CreateUser';
// import db from './database/db'
// import ListUsers from './components/ListUsers';
// import BasicModal from './components/c1';
// import { getFlashcards } from './services/flashcardService';
// import FlashcardQuiz from './components/FlashcardQuiz';



//useEffect, useMemo

// export default function App() {
//const [flashcards, setFlashcards] = React.useState(getFlashcards(nextIndex, 5))
// const [nextIndex, setNextIndex] = React.useState(0);

//memoization
// const flashcards = React.useMemo(() => getFlashcards(nextIndex, 5), [nextIndex]);

// function nextFlashcards() {
// nextIndex += 5;
// console.log("nextFlashcards called with: ", nextIndex)
// setFlashcards(getFlashcards(nextIndex, 5));
// setNextIndex(nextIndex + 5);
// }
// return (
<>
  {/* <CreateUser /> */}
  {/* <ListUsers /> */}
  {/* <BasicModal /> */}
  {/* <Container maxWidth="sm"> */}
  {/* <SelectActiveUser />
        <SubjectWithFlashcardList subjects={subjects} /> */}
  {/* {/* <FlashcardQuiz flashcards={flashcards} onContinue={nextFlashcards} /> */}
  {/* </Container> */}
</>
// )
// }


export default function App() {
  return (
    <SuggestionList users={users}/>

  )
}

