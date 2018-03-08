import React, {Component} from 'react';
import { Text } from 'react-native';
import { Header , Container , Content , Card , CardItem , Body } from 'native-base';

export default class AppBody extends Component {
render() {



            return (

              <Container>
                     <Header style={{backgroundColor: '#fff'}}/>
                     <Content>
                       <Card>
                         <CardItem header>
                           <Text>NativeBase</Text>
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
module.export = AppBody;
