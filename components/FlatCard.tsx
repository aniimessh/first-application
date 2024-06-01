import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 8,
    width: 100,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#FF0000',
  },
  cardTwo: {
    backgroundColor: '#A1DD70',
  },
  cardThree: {
    backgroundColor: '#6FDCE3',
  },
  container: {
    flexDirection: "row",
    justifyContent:"space-between",
    margin: 6
  },
});

export default FlatCard;
