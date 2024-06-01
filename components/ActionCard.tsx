import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websitelinnk: string) {
    Linking.openURL(websitelinnk);
  }
  return (
    <View>
      <Text style={styles.headingText}>Action Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: 'https://astwellsoft.com/assets/images/blog/javascript.jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Logical Assignment Operators (&&=, ||=, ??=): Combine logical
            operations with assignment for more concise syntax. Numeric
            Separators: Use underscores (_) to improve the readability of
            numeric literals. Promise.any(): Returns a promise that resolves as
            soon as any of the input promises is fulfilled, or rejects if all
            are rejected. WeakRefs and FinalizationRegistry: Introduce weak
            references for better memory management and a way to register
            cleanup callbacks for garbage collection.
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() =>
              openWebsite(
                'https://developer.mozilla.org/en-US/docs/Web/javascript',
              )
            }>
            <Text style={styles.socialLinks}>Read more</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebsite('https://www.instagram.com/anii.messh/')
            }>
            <Text style={styles.socialLinks}>Follow Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    margin: 8,
    borderRadius: 8,
  },
  elevatedCard: {
    marginBottom: 40,
    backgroundColor: '#FF8F00',
    elevation: 5,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
  },
  headingContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10,
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialLinks: {
    fontSize: 16,
    color: '#000',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
