import React, {Component} from 'react';
import {Text , Image , StyleSheet } from 'react-native';
import { Header , Left , Button , Icon , Title , Body , Right } from 'native-base';
import hnrlogo from './assets/images/logo.jpg';
export default class AppHeader extends Component {
render() {



            return (

                <Header style={{backgroundColor: '#fff'}}>
                          <Image style={styles.imagestyles} resizeMode={'contain'}  source={hnrlogo} />
              </Header>


            );
}
}
module.export = AppHeader;
const styles = StyleSheet.create({

      imagestyles : {

          width : 100,
          height: 100




      }




});
