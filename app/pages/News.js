import React, {Component} from 'react';
import { Text , Image , StyleSheet } from 'react-native';
import { Header , Container , Content , Card , CardItem , Body } from 'native-base';

export default class News extends Component {
render() {



            return (

              <Container>
                <Header style={{backgroundColor: '#fff'}}>
                          <Image style={styles.imagestyles} resizeMode={'contain'} source={require('../assets/images/logo.jpg')} />
              </Header>
                     <Content>
                       <Card>
                         <CardItem header>
                           <Text>This is the News Page..</Text>
                         </CardItem>
                         <CardItem>
                           <Body>
                             <Text>
                               //Your text here
                             </Text>
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
module.export = News;
const styles = StyleSheet.create({

      imagestyles : {

          width : 100,
          height: 100




      }




});
