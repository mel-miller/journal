import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

class App extends React.Component {

  static navigationOptions = {
    title: "Home",
    headerStyle: {
      backgroundColor: "#008198"
    },
    headerTitleStyle: {
      color: "white"
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Yep.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


const AppNavigator = createStackNavigator({
  Home: {
    screen: App
  }
});

export default createAppContainer(AppNavigator);
