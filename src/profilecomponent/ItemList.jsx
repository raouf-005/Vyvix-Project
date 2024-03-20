import { Image } from '@nextui-org/react';
import sms from '../assets/sms.svg';
import {ListItem, ListItemAvatar, ListItemText, Avatar, IconButton } from '@mui/material';

export default function ItemList() {
    return <ListItem
        sx={{ paddingBlock: 2 ,marginTop:2}}
        className='rounded-2xl bg-white shadow-lg '
        secondaryAction={<IconButton edge="end" sx={{marginRight:1}} aria-label="modify" >
            <Image src={sms}  />
        </IconButton>}
    >
        <ListItemAvatar>
            <Avatar variant='rounded' className='mr-4'
                sx={{ width: 68, height: 68 }}>
                <Image src={sms} />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={<h2 className='text-lg  bg-gradient-to-r from-danger to-primary bg-clip-text text-transparent font-semibold'>Single-line item</h2>}
            secondary={<p className='text-slate-400 text-sm'>Goal 1 </p>} />
    </ListItem>;
}