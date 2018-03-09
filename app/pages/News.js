import React, {Component} from 'react';
import { Text , Image , StyleSheet } from 'react-native';
import { Header , Container , Content , Left ,Thumbnail, Button, Icon , Card , CardItem , Body } from 'native-base';

export default class News extends Component {
  render() {



    return (

      <Container>
        <Header style={{backgroundColor: '#fff'}}>
          <Image style={styles.imagestyles} resizeMode={'contain'} source={require('../assets/images/logo.jpg')} />
        </Header>
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/bhavin-maniar.jpg')} />
                <Body>
                  <Text>
                    Bhavin Maniar
                  </Text>
                  <Text note>"An IT and Marketing Enthusiast"</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem header>
           <Text> DIGITAL MARKETING  </Text>
         </CardItem>
            <CardItem>

              <Body>
                <Image source={require('../assets/images/socialmediatweet.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  Social-Media is the buzz making word in the marketing strategies used by corporations. The only thing important is to track the efforts of the social media marketing, this can be done only when we have people clicking on our links, sharing our posts and in short, all we need is the traffic!  Now the question is how we get relevant traffic and how to engage this traffic.

                  The engagement depends now how we structure our communication in our posts and making sure that it is a compelling proposition for the reader to share it and let others also read and share the content. Though many may say that social media is ineffective, trying a few ways to generate a buzz about our content which on the long run will make the readers remember the source of the content is the best way to attract traffic.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/images/bhavin-maniar.jpg')} />
                <Body>
                  <Text>
                    Bhavin Maniar
                  </Text>
                  <Text note>"An IT and Marketing Enthusiast"</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem header>
           <Text> AWS 1ST SUMMIT IN INDIA!  </Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image source={require('../assets/images/aws.jpg')} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                Amazon Web Services Global Summits are held all around the world; these events are designed to educate new customers about their platform and offer existing customers in-depth knowledge on how to be more satisfied with AWS. For the first time, this event was organized in India at Mumbai on 3rd May 2017. The experience was exciting for HNR Tech team, and we were honored to be a part of such a spectacular event.
                </Text>
              </Body>
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
    height: 50




  }




});
