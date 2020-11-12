import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import DomainContainer from './containers/DomainContainer';
import ChallengesContainer from './containers/ChallengesContainer';
import ChallengeContainer from './containers/ChallengeContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        height: 5,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function App() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <Router>
                    <Route render={({ history }) => (
                        <AppBar style={{ background: '#282c34' }} position="static">
                            <Toolbar>
                                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" className={classes.title}>
                                </Typography>
                                <Button color="inherit" onClick={() => {
                                    history.push(`/domains`)
                                    history.go()
                                }}>
                                    <HomeIcon />
                                </Button>
                            </Toolbar>
                        </AppBar>
                    )} />
                </Router>
            </div>
            <header className="App-header">
                <h1>
                    RoboRank
                </h1>
            </header>
            <div className="App"
                style={{
                    display: "block",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            />
            <Router>
                <Switch>
                    <Redirect exact from="/" to="/domains" />
                    <Route exact path="/domains">
                        <DomainContainer />
                    </Route>
                    <Route path="/domains/:id" component={ChallengesContainer}/>
                    <Route path="/challenges/:id" component={ChallengeContainer}/>
                </Switch>
            </Router>
            <footer className="App-footer">
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </div>
    );
}