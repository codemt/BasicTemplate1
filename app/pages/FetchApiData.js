import React, { Component } from "react";
import {View,StyleSheet,TouchableOpacity,ScrollView,Dimensions,FlatList} from "react-native";
import { Container, Header, Content, Card, CardItem, Text, Body } from 'native-base';
var window= Dimensions.get('window');

var obj;
class FetchApiData extends Component {


        constructor()
        {

                    super()
                    this.state={

                        data:[]
                    }
                    
        }

      getData()
      {
        console.log('called');

               fetch('http://101musicalsacademy.in/wp-json/wp/v2/pages?content')
             .then((response) => response.json())
             .then((responseJson) => {
               console.log(responseJson);
               this.setState({data : responseJson["0"]});
               console.log(responseJson["0"]);
               console.log(responseJson["0"].author);

             })

             .catch((error) => {
               console.error(error);
             });

      }

      componentDidMount(){

              this.getData();

      }

      

      _renderItem = ({item}) => (


        <View>
            <Text style={styles.header}>{item.author}</Text>
            <Text style={styles.header}>{item.comment_status}</Text>
            
        </View>
            
          
     )


  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Content>

            


          <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item}
          />

        </Content>
      </ScrollView>


    );
  }
}


const styles = StyleSheet.create({

  container : {
      padding:5,
      paddingRight:8,
      paddingLeft:8,
      marginBottom:60
  },
  teamBoard:{
     flex:1,
     flexDirection:'row',
     paddingLeft:10,
     alignItems:'center',
     height:40,
     backgroundColor:'#ecf0f1'
  },
  header:{
    fontSize:20,
    fontWeight:'bold'
  },
  fontLeft:{
    flex:75,
    fontSize:18
  },
  fontRight:{
    flex:25,
    fontSize:18
  },
  body:{
    flex:1,
    flexDirection:'row',
    padding:5,
    height:30,
    justifyContent:'space-between'}
});

module.exports = FetchApiData;