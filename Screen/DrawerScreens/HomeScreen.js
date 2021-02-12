import React from 'react';
import { SafeAreaView } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import Recipients from '../Tabs/Recipients';
import HomeTab from '../Tabs/HomeTab';
import Donors from '../Tabs/Donors';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Tabs tabBarPosition='bottom' >
          <Tab heading="Home" tabStyle={{ backgroundColor: '#B30E05'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: '#B30E05'}}>
            <HomeTab />
          </Tab>
          <Tab heading="Donors" tabStyle={{ backgroundColor: '#B30E05'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: '#B30E05'}}>
            <Donors />
          </Tab>
          <Tab heading="Recipients" tabStyle={{ backgroundColor: '#B30E05'}} textStyle={{color: '#fff'}} activeTabStyle={{ backgroundColor: '#B30E05'}}>
            <Recipients />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>
  )
};

export default HomeScreen;
