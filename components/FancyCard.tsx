import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          src="https://1.bp.blogspot.com/-ivKr_1zCBV0/Xy1TuasbfaI/AAAAAAAAANc/92dnZkDNxTgUqXm_7nS6-OaMyhTVHFS0QCLcBGAsYHQ/s875/1596532888_ram-mandir-in-ayodhya-photos-10.jpg"
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.header}>Ram Mandir</Text>
          <Text style={styles.cardTitle}>Ayodhya</Text>
          <Text style={styles.cardLabel}>Ram Ji Home</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ab et
            impedit! Saepe hic sed eaque ducimus laborum, reiciendis autem!
          </Text>
          <Text style={styles.cardFooter}>12mins aways</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  card: {
    height: 360,
    borderRadius: 8,
    margin: 8,
  },
  cardElevated: {backgroundColor: '#fff', elevation: 3},
  cardImage: {
    height: 180,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginBottom: 8,
  },
  cardBody: {
    // flex: 1,
    // flexGrow: 1,
    paddingHorizontal: 12,
  },
  cardTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardLabel: {
    color: '#000',
    fontSize: 14,
    marginBottom: 4,
  },
  cardDescription: {
    color: '#686D76',
    fontSize: 12,
    marginBottom: 4,
  },
  cardFooter: {
    color: '#000',
  },
  header:{
    fontSize: 22,
  }
});
