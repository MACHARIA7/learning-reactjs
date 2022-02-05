import React from "react";
import { Avatar, Stack, AvatarGroup } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";


export default function SimpleAvatar() {
    return (
        <Stack direction="row" spacing={2}>
            <AvatarGroup total={10} max={3}>
                <Avatar alt="James Rodriguez" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Rogers Macharia" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Brian Mwangi" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Elon Musk" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Morries Mwenda" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Hesponi Juracik" src="https://mui.com/static/images/avatar/1.jpg" />
                <Avatar alt="Daniel Muriithi" src="https://mui.com/static/images/avatar/1.jpg" />
            </AvatarGroup>
        </Stack>
    )
}