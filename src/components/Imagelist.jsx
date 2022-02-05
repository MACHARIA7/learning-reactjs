import React from "react";
import ImageListItem from "@mui/material/ImageListItem";
import ImageList from "@mui/material/ImageList";
import Box from "@mui/material/Box";

export default function simpleImageList() {
    return (
        <Box sx={{flexGrow: 1}}>
            <ImageList sx={{width: 500, height: 450,}} cols={3} rowHeight={164}>
                <ImageListItem>
                    <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"/>
                </ImageListItem>
            </ImageList>
        </Box>
        
    )
}