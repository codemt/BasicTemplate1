import React, {Component} from 'react';
import {Text} from 'react-native';
import { Footer , FooterTab , Button , Icon  } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class AppFooter extends Component {
render() {



            return (

                <Footer>
                      <FooterTab>
                            <Button active onPress={Actions.home}>
                                <Icon name='home'/>
                                <Text> Home </Text>
                            </Button>
                            <Button  onPress={Actions.news}>
                                <Icon name='people'/>
                                <Text> News  </Text>
                            </Button>
                            <Button onPress={Actions.AboutUs}>
                                <Icon name='settings'/>
                                <Text> About Us </Text>
                            </Button>
                       </FooterTab>

                </Footer>

            );
}
}
module.export = AppFooter;
