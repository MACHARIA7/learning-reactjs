import { React } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"
import Box from "@mui/material/Box";


export default function ApplicationBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" egde="start" color="inherit">
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>NEWS</Typography>

                    <Button color="inherit">LOGIN</Button>

                </Toolbar>
            </AppBar>
        </Box>
    )
}