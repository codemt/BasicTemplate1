import React, {Component} from 'react';
import {Text, AppRegistry, View } from 'react-native';
import { Container , StyleProvider } from 'native-base';
import AppHeader from './app/AppHeader';
import AppFooter from './app/AppFooter';
import AppBody from './app/AppBody';
import { Actions , Router , Scene } from 'react-native-router-flux';
import News from './app/pages/News';
import AboutUs from './app/pages/About';
import ApiData from './app/pages/FetchApiData';
import SplashScreen from './app/SplashScreen';
export default class BasicTemplate1 extends Component {


      constructor(props){


          super(props);
          this.state = { currentScreen : 'SplashScreen'};
          console.log('Start Doing Some Tasks')
          setTimeout(()=>{
              console.log('Done some tasks for 3 seconds')
              this.setState({currentScreen:'AppHeader'})
          },3000)

      }



  render() {

          const {currentScreen} = this.state;
          let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <AppHeader />;
          return mainScreen;

            return (

                        <Container>
                          <Router>
                      <Scene key="root" hideNavBar>
                        <Scene
                          key="home"
                          component={AppHeader}
                          iconName="home"
                          title="home"
                          />
                        <Scene
                          key="news"
                          component={News}
                          title="news"
                          />
                        <Scene key="AboutUs" component={AboutUs} title="aboutus"/>
                        <Scene key="ApiData" component={ApiData} title="ApiData"/>
                      </Scene>
                    </Router>

                          <AppFooter />

                         </Container>


                    );
      }
}

AppRegistry.registerComponent('BasicTemplate1', () => BasicTemplate1);
