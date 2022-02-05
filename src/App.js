import logo from './logo.svg';
import './App.css';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton"
import SendIcon from "@mui/icons-material/Send";
import AlarmIcon from "@mui/icons-material/Alarm";
import ButtonGroup from "@mui/material/ButtonGroup";

import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails";

import ApplicationBar from "./components/Appbar.jsx";
import { simpleBox } from "./components/Paper.jsx"

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import simpleImageList from "./components/Imagelist.jsx";
import SimpleCard from "./components/Card.jsx"



import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";

import SimpleAvatar from "./components/Avatars.jsx"
import SimpleNavbar from "./components/Navbar.jsx";



function App() {
	return (
		<div>
			<SimpleNavbar></SimpleNavbar>
		
		<Container>
			<SimpleAvatar></SimpleAvatar>
			<Grid container spacing={2}>
					{(Array.from("may")).map((index) => (
					<Grid item md="4" sm="6" xsm="6">
						<SimpleCard></SimpleCard>
					</Grid>
				))}		
			</Grid>
		
		</Container>
		
		</div>




		// <ImageList sx={{width: 500, height: 400}} cols={3} rowHeight={164} variant="masonry">
		// 	{itemData.map((item) => (
		// 		<ImageListItem key={item}>
		// 			<img
		// 				src={item.img + "?w=164&h=164&fit=crop&auto=format"}
		// 				srcSet={item.img + "?w=164&h=164&fit=crop&auto=format&dpr=2 2x"}
		// 				alt={item.title}
		// 				loading="lazy"
		// 			/>
		// 		</ImageListItem>
		// 	))}
		// </ImageList>
		
		// <Box sx={{ flexGrow: 1, padding: 2 }}>
		// 	<Grid container spacing={10}>
		// 		<Grid item xs={8} sm={6} md={4} lg={2} xlg={1}>
		// 			<Paper>xs8</Paper>
		// 		</Grid>
		// 		<Grid item xs="4">
		// 			<Paper>xs4</Paper>
		// 		</Grid>
		// 		<Grid item xs="12">
		// 			<Paper>xs12</Paper>
		// 		</Grid>
		// 	</Grid>
		// </Box>

			
  	);
}


const itemData = [
	{
	  img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
	  title: 'Breakfast',
	},
	{
	  img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
	  title: 'Burger',
	},
	{
	  img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
	  title: 'Camera',
	},
	{
	  img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
	  title: 'Coffee',
	},
	{
	  img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
	  title: 'Hats',
	},
	{
	  img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
	  title: 'Honey',
	},
	{
	  img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
	  title: 'Basketball',
	},
	{
	  img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
	  title: 'Fern',
	},
	{
	  img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
	  title: 'Mushrooms',
	},
	{
	  img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
	  title: 'Tomato basil',
	},
	{
	  img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
	  title: 'Sea star',
	},
	{
	  img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
	  title: 'Bike',
	},
  ];


export default App;
