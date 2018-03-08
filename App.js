import React, {Component} from 'react';
import {Text, AppRegistry, View } from 'react-native';
import { Container , StyleProvider } from 'native-base';
import AppHeader from './app/AppHeader';
import AppFooter from './app/AppFooter';
import AppBody from './app/AppBody';
import { Actions , Router , Scene } from 'react-native-router-flux';
import News from './app/pages/News';
import AboutUs from './app/pages/About';
export default class BasicTemplate1 extends Component {



  render() {
            return (

                        <Container>
                          <Router>
                      <Scene hideNavBar>
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
                      </Scene>
                    </Router>

                          <AppFooter />

                         </Container>


                    );
      }
}

AppRegistry.registerComponent('BasicTemplate1', () => BasicTemplate1);
