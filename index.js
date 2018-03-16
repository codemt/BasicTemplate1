import React , { Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import AppHeader from './app/AppHeader';
import SplashScreen from './app/SplashScreen';
class Main extends Component{
    constructor(props){


        super(props);
        this.state = { currentScreen : 'SplashScreen'};
        console.log('Start Doing Some Tasks')
        setTimeout(()=>{
            console.log('Done some tasks for 3 seconds')
            this.setState({currentScreen:'AppHeader'})
        },3000)

    }
    render(){

        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <AppHeader />;
        return mainScreen;


    }




}
AppRegistry.registerComponent('BasicTemplate1', () => Main);
