import React, {Component} from 'react';
import { Text , Image , StyleSheet , AsyncStorage , TouchableOpacity } from 'react-native';
import { Header , Container , Content , Card , CardItem , Body } from 'native-base';
export default class FetchApiData extends Component {
  
  
  
  savedata(){

    let user = 'John Doe';
    AsyncStorage.setItem('user',user);
    alert('item saved');

}
displayData = async () => {

        try{

              let user = await AsyncStorage.getItem('user');
              alert(user);

        }
        catch(error){

              alert(error);

        }
}


 
render() {

            return (

              <Container>
                <Header style={{backgroundColor: '#fff'}}>
                          <Image style={styles.imagestyles} resizeMode={'contain'} source={require('../assets/images/logo.jpg')} />
              </Header>

                     <Content>
                       <Card>
                         <CardItem header>
                           <Text>About Us.</Text>
                         </CardItem>
                         <CardItem>
                           <Body>
                            
                                <TouchableOpacity onPress={()=>this.savedata()}>
                                    <Text> Click me to Save Data!! </Text>
                                  </TouchableOpacity>
                                  <TouchableOpacity onPress={()=>this.displayData()}>
                                    <Text> Click me to Display Data!! </Text>
                                  </TouchableOpacity>
                             
                           </Body>
                         </CardItem>
                         <CardItem footer>
                           <Text>GeekyAnts</Text>
                         </CardItem>
                      </Card>
                     </Content>
                   </Container>


            );
          
          
}
}
module.export = FetchApiData;
const styles = StyleSheet.create({

      imagestyles : {

          width : 100,
          height: 50




      }




});
