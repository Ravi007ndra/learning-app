import * as React from 'react';
import SuggestedItem from "../SuggestedItem";
import Box from '@mui/material/Box';
import List from '@mui/material/List';

export default function SuggestionList({ users }) {
    return (
        <Box>
            <h3>People You may know</h3>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {users.map((user) => (
                    < SuggestedItem user={user} />
                ))}
            </List>
        </Box>
    )
}