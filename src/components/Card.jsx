import React from 'react';
import {
    Card,
    CardHeader,
    CardMedia,
    Collapse,
    Avatar,
    IconButton,
    Typography,
    Box,
    CardActions,
    CardContent,
    Button
} from "@mui/material";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite"


export default function SimpleCard({ ...props }) {
    let dt = new Date();
    return (
        <Card variant="outlined">
            <CardHeader
                avatar={
                    <Avatar>R</Avatar>
                }
                action={
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                }
                title="The River and the Source"
                subheader={dt.toUTCString()}
            />
            <CardMedia
                component="img"
                image="https://mui.com/static/images/cards/paella.jpg"
                height="200"
            />

            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    The story of Akoko and her lineage start with with a dileman as his first sires his first daught which was an abomination to the community
                </Typography>
            </CardContent>

            <CardActions>
                <IconButton>
                    <FavoriteIcon />
                </IconButton>
                <IconButton>
                    <ShareIcon></ShareIcon>
                </IconButton>
                <Button>read</Button>
            </CardActions>

        </Card>
    )
}