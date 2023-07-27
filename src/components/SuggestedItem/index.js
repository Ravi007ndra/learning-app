import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

export default function SuggestedItem({ user }) {
    return (
        <ListItem>
            <ListItemAvatar>
                <Avatar alt={user.fullName} src={user.avatar} />
            </ListItemAvatar>
            <Box>

                <h4>{user.fullName}</h4>
                
                <AvatarGroup total={user.mutualFriend} >
                    <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar sx={{ width: 24, height: 24 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </AvatarGroup>
                <Box>
                    <Button variant='contained'>ADD FRIEND</Button>
                    <Button variant='contained'>REMOVE</Button>
                </Box>
            </Box>



        </ListItem>

    );

}



