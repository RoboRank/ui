import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
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
import ChallengeContainer from './containers/ChallengeContainer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    const Linker = props => <Link to="/" {...props}/>
    return (
        <div>
            <div className={classes.root}>
                <AppBar style={{ background: '#282c34'}} position="static">
                    <Toolbar>
                        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                        </Typography>
                        <Router>
                            <Button color="inherit" component={Linker}>
                                <HomeIcon />
                            </Button>
                        </Router>
                    </Toolbar>
                </AppBar>
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
                    height: "100vh"
                }}
            >
                <Router>
                    <Switch>
                        <Route path="/domains">
                            <DomainContainer />
                        </Route>
                        <Route path="/">
                            <DomainContainer />
                        </Route>
                    </Switch>
                </Router>
            </div>

            <footer className="App-footer">
                <img src={logo} className="App-logo" alt="logo" />
            </footer>
        </div>
    );
}

export default App;
