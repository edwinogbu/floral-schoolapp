// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
// const kPrimaryColor = '#253D84';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';

// const AnnouncementDetailScreen = ({ route }) => {
//   const { announcement } = route.params;

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView contentContainerStyle={styles.scrollContainer}>
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>{announcement.title}</Text>
//           <Text style={styles.cardDate}>{announcement.date}</Text>
//           <Text style={styles.cardNote}>{announcement.note}</Text>
//         </View>
//         <View style={styles.backgroundCard}>
//           <Text style={styles.backgroundText}>Floral School</Text>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F2F5',
//   },
//   scrollContainer: {
//     flexGrow: 1,
//   },
//   card: {
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 16,
//     margin: 16,
//     elevation: 5,
//     marginTop: -10, // Adjust to overlap by 30%
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: kPrimaryColor,
//   },
//   cardDate: {
//     fontSize: 16,
//     color: kTextBlackColor,
//     marginTop: 8,
//   },
//   cardNote: {
//     fontSize: 18,
//     color: kTextBlackColor,
//     marginTop: 12,
//   },
//   backgroundCard: {
//     backgroundColor: kPrimaryColor,
//     height: 200, // Adjust the height as needed
//     borderTopLeftRadius: 15,
//     borderTopRightRadius: 15,
//     justifyContent: 'flex-end',
//     padding: 16,
//   },
//   backgroundText: {
//     fontSize: 18,
//     color: kTextWhiteColor,
//     fontWeight: 'bold',
//   },
// });

// export default AnnouncementDetailScreen;


import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';

const kPrimaryColor = '#253D84';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';

const AnnouncementDetailScreen = ({ route }) => {
  const { announcement } = route.params;

  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{announcement.title}</Text>
        <Text style={styles.cardDate}>{announcement.date}</Text>
        <Text style={styles.cardNote}>{announcement.note}</Text>
      </View>
      <View style={styles.backgroundCard}>
        <Text style={styles.backgroundText}>Floral School</Text>
      </View>

    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  backgroundCard: {
    backgroundColor: kPrimaryColor,
    height: '40%', // Adjust the height to your preference
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: 'flex-end',
    padding: 16,
    top:-109,
    bottom:-109,
    zIndex: 1, // Add zIndex to send it to the back
    paddingTop:1000,
  },
  backgroundText: {
    fontSize: 18,
    color: kTextWhiteColor,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    margin: 16,
    elevation: 5,
    marginTop: -10, // Adjust to overlap by 30%
    zIndex: 2, // Add zIndex to bring it to the front
    height: '60%', // Adjust the height to your preference

  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: kPrimaryColor,
  },
  cardDate: {
    fontSize: 16,
    color: kTextBlackColor,
    marginTop: 8,
  },
  cardNote: {
    fontSize: 18,
    color: kTextBlackColor,
    marginTop: 12,
  },
});

export default AnnouncementDetailScreen;

