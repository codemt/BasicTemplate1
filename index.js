import React , { Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import AppHeader from './app/AppHeader';
import AppFooter from './app/AppFooter';
import AppBody from './app/AppBody';
import SplashScreen from './app/SplashScreen';
class Main extends Component{
    constructor(props){


        super(props);
        this.state = { currentScreen : 'SplashScreen'};
        console.log('Start Doing Some Tasks')
        setTimeout(()=>{
            console.log('Done some tasks for 3 seconds')
            this.setState({currentScreen:'App'})
        },3000)

    }
    render(){

        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />;
        return mainScreen;


    }




}
AppRegistry.registerComponent('BasicTemplate1', () => Main);
