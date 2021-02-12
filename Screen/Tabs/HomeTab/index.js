import React, { useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet} from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeTab = (props) => {
  const [user, setUser] = useState('Arbaz Khan');
  const [bloodType, setBloodType] = useState('A+');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.welcome}>
        <Text style={{ color: '#fff' }}>Welcome: {user}</Text>
        <Text style={{ color: '#fff' }}>Blood Group: {bloodType}</Text>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.cards}>
          <Text style={styles.cardText}>Donate Blood</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards}>
          <Text style={styles.cardText}>Request For Blood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.cards}>
          <Text style={styles.cardText}>Blood Donors</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cards}>
          <Text style={styles.cardText}>Blood Types</Text>
        </TouchableOpacity>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  },
  welcome: {
    backgroundColor: '#C34632',
    width: '85%',
    height: 80,
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '90%',
    marginTop: 50,
  },
  cards: {
    height: 100,
    width: 135,
    borderWidth: 1,
    borderColor: '#C34632',
    borderBottomEndRadius: 10,
    borderTopStartRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    color: '#B30E05',
  }
})

export default HomeTab;
