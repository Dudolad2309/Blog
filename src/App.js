import React from "react";
import {AppBar, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {CardBlock} from "./component/CardBlock";
import {Header} from "./component/Header";
import {FooterBar} from "./component/FooterBar";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	mainFeaturesPost: {
		position: "relative",
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "rgba(0,0,0,.3)"
	},
	mainFeaturesPostContent: {
		position: "relative",
		padding: theme.spacing(10),
		marginTop: theme.spacing(3)
	},
}));

const App = () => {
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	const classes = useStyles();
	return (
		<>
			<div className="App">
				<div>
					<AppBar position="fixed">
						<Container fixed>
							<Header/>
						</Container>
					</AppBar>
				</div>
			</div>
			<main>
				<Paper className={classes.mainFeaturesPost}
				       style={{backgroundImage: `url(https://source.unsplash.com/random)`}}>
					<Container fixed>
						<div className={classes.overlay}/>
						<Grid container>
							<Grid item md={6}>
								<div className={classes.mainFeaturesPostContent}>
									<Typography component="h1" variant="h3" color="inherit" gutterBottom>
										Developer Blog
									</Typography>
									<Typography variant="h5" color="inherit" paragraph>
										Использование этого подхода в продакшене не рекомендуется
										- клиент вынужден загружать целую библиотеку независимо от того,
										какие компоненты он реально использует. Это плохо влияет на
										производительность.
									</Typography>
									<Button variant="contained" color="secondary">
										Learn more
									</Button>
								</div>

							</Grid>
						</Grid>
					</Container>
				</Paper>
				<div>
					<Container maxWidth="md">
						<Typography variant="h2" align="center" color="textPrimary" gutterBottom>
							Developer Blog
						</Typography>
						<Typography variant="h5" align="center" color="textSecondary" paragraph>
							Использование этого подхода в продакшене не рекомендуется
							- клиент вынужден загружать целую библиотеку независимо от того,
							какие компоненты он реально использует. Это плохо влияет на
							производительность.Использование этого подхода в продакшене не рекомендуется
							- клиент вынужден загружать целую библиотеку независимо от того,
							какие компоненты он реально использует. Это плохо влияет на
							производительность.
						</Typography>
						<div>
							<Grid container spacing={5} justify="center">
								<Grid item>
									<Button variant="contained" color="primary">Start Now</Button>
								</Grid>
								<Grid item>
									<Button variant="outlined" color="primary">Learn more</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
				<Container maxWidth="md">
					<CardBlock cards={cards}/>
				</Container>
			</main>
			<FooterBar/>
		</>
	);
};
export default App;
