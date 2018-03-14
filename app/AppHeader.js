import React, {Component} from 'react';
import {Text , Image , StyleSheet } from 'react-native';
import { Header , Left , Button , Container , Content , Card , CardItem ,Icon , Title , Body , Right } from 'native-base';
import hnrlogo from './assets/images/logo.jpg';
export default class AppHeader extends Component {
render() {



            return (
                <Container>
                      <Header style={{backgroundColor: '#fff'}}>
                                <Image style={styles.imagestyles} resizeMode={'contain'}  source={hnrlogo} />
                    </Header>
                         <Content>
                           <Card>
                             <CardItem>
                               <Body>
                                 <Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 </Text>
                               </Body>
                             </CardItem>
                           </Card>
                           <Card>
                             <CardItem>
                               <Body>
                                 <Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 </Text>
                               </Body>
                             </CardItem>
                           </Card>
                           <Card>
                             <CardItem>
                               <Body>
                                 <Text>
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                                 </Text>
                               </Body>
                             </CardItem>
                           </Card>
                         </Content>


                </Container>


            );
}
}
module.export = AppHeader;
const styles = StyleSheet.create({

      imagestyles : {

          width : 100,
          height: 50,
          paddingTop: 10




      }




});
