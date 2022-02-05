import React from "react";
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box";


export default function simplePaper() {
    return (
        <Paper elevation="24" variant="outlined" />
    )
}

export function simpleBox() {
    return (
        <Box
            sx={{
                width: 300,
                height: 300,
                backgroundColor: "primary.dark",
                "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7]
            }
        }}
        >
            some text
        </Box>
    )
}