import React, {Component} from 'react';
import {Text} from 'react-native';
import { Footer , FooterTab , Button , Icon  } from 'native-base';
import { Actions } from 'react-native-router-flux';
export default class AppFooter extends Component {
render() {



            return (

                <Footer >
                      <FooterTab style={{backgroundColor: '#fff'}}>
                            <Button  onPress={Actions.home}>
                                <Icon name='ios-home'/>
                                <Text> Home </Text>
                            </Button>
                            <Button  onPress={Actions.news}>
                                <Icon name='ios-water'/>
                                <Text> Our Blog  </Text>
                            </Button>
                            <Button onPress={Actions.AboutUs}>
                                <Icon name='ios-body'/>
                                <Text> About Us </Text>
                            </Button>
                       </FooterTab>

                </Footer>

            );
}
}
module.export = AppFooter;
