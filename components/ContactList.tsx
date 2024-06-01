import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ContactList = () => {
  const data = [
    {
      uid: 1,
      name: 'Alice Johnson',
      status: 'Active',
      imageUrl: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      uid: 2,
      name: 'Bob Smith',
      status: 'Inactive',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      uid: 3,
      name: 'Catherine Lee',
      status: 'Pending',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
    {
      uid: 4,
      name: 'David Martinez',
      status: 'Active',
      imageUrl: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
        {data.map(item => (
          <View key={item.uid} style={styles.userCard}>
            <Image source={{uri: item.imageUrl}} style={styles.contactImage} />
            <View>
              <Text style={styles.userName}>{item.name}</Text>
              <Text style={styles.userStatus}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 8,
  },
  contactImage: {
    height: 60,
    width: 60,
    objectFit: 'contain',
    borderRadius: 100 / 2,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 5,
    backgroundColor: "#123456",
    padding: 8,
    borderRadius: 8,
  },
  userName: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  userStatus: {
    fontSize: 16
  },
});
