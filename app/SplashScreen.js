import React, {Component} from 'react';
import {Text, StyleSheet, View } from 'react-native';
export default class SplashScreen extends Component {



  render() {
            return (

                        <View style={styles.container}> 
                               <Text style={styles.title}> Welcome to My App.</Text>
                        </View>



                    );
      }
}
module.export = SplashScreen;
const styles = StyleSheet.create({

        container: {

                backgroundColor:'green',
                flex: 1,
                alignItems:'center',
                justifyContent:'center'



        },
        title: {

                fontWeight:'bold',
                fontSize:18    



        }




})