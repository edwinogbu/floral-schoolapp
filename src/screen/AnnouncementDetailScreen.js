import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnnouncementDetailScreen = ({ route }) => {
  const { announcement } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>{announcement.title}</Text>
          <Text style={styles.cardDate}>{announcement.date}</Text>
          <Text style={styles.cardNote}>{announcement.note}</Text>
        </View>
        <View style={styles.backgroundCard}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    flexDirection: 'row',
    position: 'relative',
  },
  card: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 16,
    margin: 16,
    elevation: 5, // Add elevation for Android shadow
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#253D84',
  },
  cardDate: {
    fontSize: 16,
    color: '#555',
    marginTop: 8,
  },
  cardNote: {
    fontSize: 18,
    color: '#555',
    marginTop: 12,
  },
  backgroundCard: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#253D84', // Background color for the second card
    borderRadius: 15,
    margin: 16,
    zIndex: -1, // Place it behind the first card
  },
});

export default AnnouncementDetailScreen;







// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const AnnouncementDetailScreen = ({ route }) => {
//   const { announcement } = route.params;

//   return (
//     <View style={styles.container}>
//       <View style={styles.cardContainer}>
//         <View style={styles.card}>
//           <Text style={styles.cardTitle}>{announcement.title}</Text>
//           <Text style={styles.cardDate}>{announcement.date}</Text>
//           <Text style={styles.cardNote}>{announcement.note}</Text>
//         </View>
//         <View style={styles.backgroundCard}></View>
//       </View>
//       <Image
//         source={announcement.image}
//         style={styles.image}
//         resizeMode="cover"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F0F2F5',
//   },
//   cardContainer: {
//     flexDirection: 'row',
//     position: 'relative',
//   },
//   card: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//     borderRadius: 15,
//     padding: 16,
//     margin: 16,
//     elevation: 5,
//   },
//   cardTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#253D84',
//   },
//   cardDate: {
//     fontSize: 16,
//     color: '#555',
//     marginTop: 8,
//   },
//   cardNote: {
//     fontSize: 18,
//     color: '#555',
//     marginTop: 12,
//   },
//   backgroundCard: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: '#253D84',
//     borderRadius: 15,
//     margin: 16,
//     zIndex: -1,
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: 200, // Adjust the height as needed
//   },
// });

// export default AnnouncementDetailScreen;
