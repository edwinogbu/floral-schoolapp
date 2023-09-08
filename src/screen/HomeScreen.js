import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet, Alert, Moda } from 'react-native';

// import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal } from 'react-native';
// import { ScrollView, Image, } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import Font Awesome icons

const kPrimaryColor = '#253D84';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';
const kContainerColor = '#777777';
const kOtherColor = '#F4F6F7';
const kTextLightColor = '#A5A5A5';
const kErrorBorderColor = '#E74C3C';
const kDefaultPadding = 20;

const HomeScreen = ({ navigation }) => {
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        {/* <Text style={styles.profileHeaderText}>Home</Text> */}
        <View style={styles.profileInfo}>
          <View style={styles.profileImageContainer}>
            <Image
             source={require('./../../assets/images/three-student.png')}
              style={styles.profileImage}
            />
          </View>

          <View style={{...styles.profileDetails, marginHorizontal:30}}>
            <Text style={styles.profileName}>Welcome, King Bryan </Text>
            <Text style={styles.profileClass}> S S 3 | Roll no: 12</Text>
            <Text style={styles.profileDate}>23-08-2023</Text>
          </View>
        </View>
      </View>

      <View style={styles.dashboardContainer}>
        <View style={styles.dataCardRow}>
          <DataCard
            title="Check Result"
            onPress={() => {()=>{navigation,navigate('FeeScreen')}}}
          />
          <DataCard
            title="Pay fees"
            onPress={() => navigation.navigate('FeeScreen')}
          />
        </View>
        <View style={styles.dataCardRow}>
          <DataCard
            title="Assignment"
            onPress={() => navigation.navigate('FeeScreen')}
          />
          <DataCard        
            title="News / Event"
            // value="600$"
            onPress={() => navigation.navigate('FeeScreen')}
          />
        </View>
        <View style={styles.dataCardRow}>
          <DataCard
            title="Announcement/PTA"
            // value="600$"
            onPress={() => navigation.navigate('AnnouncementScreen')}
          />
          <DataCard
            title="Holiday"
            // value="600$"
            onPress={() => navigation.navigate('FeeScreen')}
          />
        </View>

   
        <View style={styles.dataCardRow}>
          <DataCard
            title="FAQ"
            // value="600$"
            onPress={() => navigation.navigate('FAQScreen')}
          />
          <DataCard
            title="Update"
            // value="600$"
            onPress={() => navigation.navigate('FeeScreen')}
          />
        </View>
      
      </View>
    </ScrollView>
  );
};

const DataCard = ({ title, value, onPress, style }) => {
  // Define an object that maps titles to Font Awesome icons
  const iconMappings = {
    'Check Result':'user',
    'Pay fees': 'money',
    'Assignment': 'book',
    'News / Event': 'calendar-check-o',
    'Announcement/PTA': 'calendar',
    'Holiday': 'plane',
    'FAQ': 'question-circle',
    'Update': 'calendar-check-o',
  };

  return (
    <TouchableOpacity style={[styles.dataCard, style]} onPress={onPress}>
    <View
      style={{
        backgroundColor: kPrimaryColor,
        borderRadius: 100,
        padding: 10,
      }}
    >
      <FontAwesome
        name={iconMappings[title]}
        size={30}
        color={kTextWhiteColor}
      />
    </View>
    <Text style={styles.dataCardTitle}>{title}</Text>
    <Text style={styles.dataCardValue}>{value}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: kTextWhiteColor,
    backgroundColor: kPrimaryColor,
  },
  profileHeader: {
    padding: kDefaultPadding,
  },
  profileHeaderText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: kDefaultPadding,
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImageContainer: {
    borderRadius: 60,
    backgroundColor: kSecondaryColor,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 60,
  },
  profileDetails: {
    marginLeft: kDefaultPadding,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    // color:kTextBlackColor,
    color:kTextWhiteColor,
  },
  profileClass: {
    fontSize: 16,
    fontWeight: 'bold',
    // color:kTextBlackColor,
    color:kTextWhiteColor,
  },
  profileDate: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f1e8ff',
    padding: 5,
    borderRadius: 25,
    textAlign: 'center',
  },
  dataCards: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: kDefaultPadding,
  },
  dataCardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  dataCardValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  dashboardContainer: {
    backgroundColor: '#f1e8ff',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingHorizontal: 34,
    paddingTop: 20,
    alignItems: 'center',
    height:'100%',
    marginBottom:50,
  },
  dataCardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Allow cards to wrap to the next row
    marginBottom: 20,
    width: '100%', // Ensure the row takes up the full width of the container
  },
  dataCard: {
    alignItems: 'center',
    backgroundColor:'#FFF',
    borderRadius: kDefaultPadding,
    padding: kDefaultPadding /4,
    width: '48%', // Adjust the width to occupy approximately half of the row
    marginBottom: 12, // Add margin between cards in the row
    color: '#000',
    marginHorizontal:2,
    borderColor:kPrimaryColor,
    borderWidth:2,
    fontWeight: 'bold',
    // height:'90%',
  },
});

export default HomeScreen;






// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

// import { Header } from 'react-native-elements';
// import { MaterialIcons, Ionicons } from '@expo/vector-icons';

// // import SvgUri from 'react-native-svg-uri'; // Make sure you have installed this package
// // import { Dimensions } from 'react-native';
// // import { Icon } from 'react-native'; // Import the icon library you want to use
// // import { FontAwesome5} from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

// const kPrimaryColor = '#345FB4';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kContainerColor = '#777777';
// const kOtherColor = '#F4F6F7';
// const kTextLightColor = '#A5A5A5';
// const kErrorBorderColor = '#E74C3C';
// const kDefaultPadding = 20;

// const App = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <Header
//         leftComponent={
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="ios-arrow-back" size={24} color="#fff" />
//             <Text style={{ color: '#fff', marginLeft: 20 }}>Back</Text>
//           </TouchableOpacity>
//         }
//         // backgroundColor="#000080"
//         backgroundColor="#f1e8ff"
//         centerComponent={{ text: 'The Floral School', style: styles.headerText }}
//       />
//       <View style={styles.profileHeader}>
//         <Text style={styles.profileHeaderText}>My Profile</Text>
//         <View style={styles.profileInfo}>
//           <View style={styles.profileImageContainer}>
//             <Image
//               source={require('./assets/images/school-children-svg.jpg')}
//               style={styles.profileImage}
//             />
//           </View>
      
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Bryan Ojo</Text>
//             <Text style={styles.profileClass}> S S 3 | Roll no: 12</Text>
//             <Text style={styles.profileDate}>23-08-2023</Text>
//           </View>
//         </View>
//       </View>
//       <View style={styles.dataCards}>
//       <DataCard
//           style={{
//             backgroundColor:kContainerColor, // Yellow background
//             color:kPrimaryColor, // Black text color
//           }}
//           title="Attendance"
//           value="90.02%"
//           onPress={() => {}}
//         />
//         <DataCard
//           style={{
//             backgroundColor:'#77ccff', // Yellow background
//             color: 'red', // Red text color
//           }}
//           title="Fees Dues"
//           value="600$"
//           onPress={() => navigation.navigate('FeeScreen')}
//         />
//       </View>
//       {/* Rest of your content */}
//       <View style={styles.dashboardContainer}>
//         <View style={styles.dataCardRow}>
//           <DataCard
//             title="assignment"
//             value="90.02%"
//             // icon="book" // Use the icon name you want to display
//             onPress={() => {/* Go to attendance screen */}}
//           />
//           <DataCard
//             title="timetable"
//             value="600$"
//             // icon="calendar" // Use the icon name you want to display
//             onPress={() => navigation.navigate('FeeScreen')}
//           />
//         </View>
//         <View style={styles.dataCardRow}>
//           <DataCard
//             title="quiz"
//             value="600$"
//             // icon="question-circle" // Use the icon name you want to display
//             onPress={() => navigation.navigate('FeeScreen')}
//           />
//           <DataCard
//             title="holiday"
//             value="600$"
//             // icon="plane" // Use the icon name you want to display
//             onPress={() => navigation.navigate('FeeScreen')}
//           />
//         </View>
//         <View style={styles.dataCardRow}>
//           <DataCard
//             title="event"
//             value="600$"
//             // icon="calendar-check-o" // Use the icon name you want to display
//             onPress={() => navigation.navigate('FeeScreen')}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };


// const DataCard = ({ title, value, onPress, style }) => {
//   return (
//     <TouchableOpacity style={[styles.dataCard, style]} onPress={onPress}>
//       <Text style={styles.dataCardTitle}>{title}</Text>
//       <Text style={styles.dataCardValue}>{value}</Text>
//     </TouchableOpacity>
//   );
// };


// // const DataCard = ({ title, value, onPress, icon }) => {
// //   return (
//     // <TouchableOpacity style={styles.dataCard} onPress={onPress}>
//     //   <Icon name={icon} size={30} color={kPrimaryColor} /> {/* Display the icon */}
//     //   <Text style={styles.dataCardTitle}>{title}</Text>
//     //   <Text style={styles.dataCardValue}>{value}</Text>
//     // </TouchableOpacity>
// //   );
// // };


// // const DataCard = ({ title, value, onPress, icon }) => {
// //   return (
// //     <TouchableOpacity style={styles.dataCard} onPress={onPress}>
// //       <FontAwesome5 name={icon} size={30} color={kPrimaryColor} /> Display the icon
// //       <Text style={styles.dataCardTitle}>{title}</Text>
// //       <Text style={styles.dataCardValue}>{value}</Text>
// //     </TouchableOpacity>
// //   );
// // };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:kSecondaryColor,
//   },
//   profileHeader: {
//     padding: kDefaultPadding,
//   },
//   profileHeaderText: {
//     fontSize: 24,
//     textAlign: 'center',
//     marginBottom: kDefaultPadding,
//   },
//   profileInfo: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   profileImageContainer: {
//     borderRadius: 60,
//     backgroundColor: kSecondaryColor,
//   },
//   profileImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//   },
//   profileDetails: {
//     marginLeft: kDefaultPadding,
//   },
//   profileName: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color:'#f1e8ff'
//   },
//   profileClass: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color:'#f1e8ff'
//   },
//   profileDate: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     backgroundColor:'#f1e8ff',
//     padding:5,
//     borderRadius:25,
//     textAlign:'center'
//   },
//   profileReport: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   profileReportIcon: {
//     width: 32,
//     height: 32,
//   },
//   dataCards: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     padding: kDefaultPadding,
//   },
 
//   dataCardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: kOtherColor,
//   },
//   dataCardValue: {
//     fontSize: 16,
//     color: kOtherColor,
//   },
//   dashboardContainer: {
//     backgroundColor: '#f1e8ff',
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     paddingHorizontal: 34,
//     paddingTop: 20,
//     alignItems: 'center',
//   },
//   dataCardRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     flexWrap: 'wrap', // Allow cards to wrap to the next row
//     marginBottom: 20,
//     width: '100%', // Ensure the row takes up the full width of the container
//   },
//   dataCard: {
//     alignItems: 'center',
//     backgroundColor: kPrimaryColor,
//     borderRadius: kDefaultPadding / 2,
//     padding: kDefaultPadding,
//     width: '48%', // Adjust the width to occupy approximately half of the row
//     marginBottom: 10, // Add margin between cards in the row
//     color:'#000'
//   },

// });

// export default App;


// // import React from 'react';
// // import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
// // import { kDefaultPadding, kPrimaryColor, kOtherColor } from './src/constant/constant';
// // import { Dimensions } from 'react-native';

// // const screenWidth = Dimensions.get('window').width;
// // const cardWidth = screenWidth * 0.2; // 40% of the screen width


// // const kPrimaryColor = '#345FB4';
// // const kSecondaryColor = '#6789CA';
// // const kTextBlackColor = '#313131';
// // const kTextWhiteColor = '#FFFFFF';
// // const kContainerColor = '#777777';
// // const kOtherColor = '#F4F6F7';
// // const kTextLightColor = '#A5A5A5';
// // const kErrorBorderColor = '#E74C3C';
// // const kDefaultPadding = 20;

// // const HomeScreen = ({ navigation }) => {
// //   return (
// //     <ScrollView style={styles.container}>
// //       <View style={styles.profileHeader}>
// //         <Text style={styles.profileHeaderText}>My Profile</Text>
// //         <View style={styles.profileInfo}>
// //           <View style={styles.profileImageContainer}>
// //             <Image
// //               source={require('./assets/images/students_profile.jpg')}
// //               style={styles.profileImage}
// //             />
// //           </View>
// //           <View style={styles.profileDetails}>
// //             <Text style={styles.profileName}>Aisha Mirza</Text>
// //             <Text style={styles.profileClass}>Class X-II A | Roll no: 12</Text>
// //           </View>
// //           <TouchableOpacity onPress={() => navigation.navigate('MyProfileScreen')}>
// //             <Text style={styles.profileReport}>Report</Text>
// //             <Image source={require('./assets/images/report.jpg')} style={styles.profileReportIcon} />
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //       <View style={styles.dataCards}>
// //         <DataCard title="Attendance" value="90.02%" onPress={() => {/* Go to attendance screen */}} />
// //         <DataCard title="Fees Due" value="600$" onPress={() => navigation.navigate('FeeScreen')} />
// //       </View>
// //       {/* Rest of your content */}
// //       <View style={styles.content}>
// //         <ScrollView>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Take Quiz" here */}}
// //               icon={require('./assets/images/lock.jpg')}
// //               title="Take Quiz"
// //             />
// //             <HomeCard
// //               onPress={() => navigation.navigate('AssignmentScreen')}
// //               icon={require('./assets/images/lock.jpg')}
// //               title="Assignments"
// //             />
// //           </View>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Holidays" here */}}
             
// //               title="Holidays"
// //             />
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Time Table" here */}}
             
// //               title="Time Table"
// //             />
// //           </View>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Result" here */}}

// //               title="Result"
// //             />
// //             <HomeCard
// //               onPress={() => navigation.navigate('DateSheetScreen')}
// //               // icon={require('./assets/images/lock.jpg')}
// //               title="DateSheet"
// //             />
// //           </View>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Ask" here */}}
// //               // icon={require('./assets/images/lock.jpg')}
// //               title="Ask"
// //             />
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Gallery" here */}}
// //               // icon={require('./assets/images/lock.jpg')}
// //               title="Gallery"
// //             />
// //           </View>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Leave Application" here */}}
// //               // icon={require('./assets/images/lock.jpg')}
// //               title="Leave\nApplication"
// //             />
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Change Password" here */}}
             
// //               title="Change\nPassword"
// //             />
// //           </View>
// //           <View style={styles.contentRow}>
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Events" here */}}
              
// //               title="Events"
// //             />
// //             <HomeCard
// //               onPress={() => {/* Add your logic for "Logout" here */}}
              
// //               title="Logout"
// //             />
// //           </View>
// //         </ScrollView>
// //       </View>
// //     </ScrollView>
// //   );
// // };

// // const DataCard = ({ title, value, onPress }) => {
// //   return (
// //     <TouchableOpacity style={styles.dataCard} onPress={onPress}>
// //       <Text style={styles.dataCardTitle}>{title}</Text>
// //       <Text style={styles.dataCardValue}>{value}</Text>
// //     </TouchableOpacity>
// //   );
// // };

// // const HomeCard = ({ onPress, icon, title }) => {
// //   return (
// //     <TouchableOpacity style={styles.homeCard} onPress={onPress}>
      
// //       <Text style={styles.homeCardTitle}>{title}</Text>
// //     </TouchableOpacity>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: kOtherColor,
// //   },
// //   profileHeader: {
// //     padding: kDefaultPadding,
// //     alignItems: 'center', // Add this line to center children vertically
// //   },
// //   profileHeaderText: {
// //     fontSize: 24,
// //     textAlign: 'center',
// //     marginBottom: kDefaultPadding,
// //   },
// //   profileInfo: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     alignItems: 'center',
// //   },
// //   profileImageContainer: {
// //     borderRadius: 60,
// //     backgroundColor: kPrimaryColor,
// //   },
// //   profileImage: {
// //     width: 120,
// //     height: 120,
// //     borderRadius: 60,
// //   },
// //   profileDetails: {
// //     marginLeft: kDefaultPadding,
// //   },
// //   profileName: {
// //     fontSize: 20,
// //     fontWeight: 'bold',
// //   },
// //   profileClass: {
// //     fontSize: 16,
// //   },
// //   profileReport: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   profileReportIcon: {
// //     width: 32,
// //     height: 32,
// //   },
// //   dataCards: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     padding: kDefaultPadding,
// //   },
// //   dataCard: {
// //     alignItems: 'center',
// //     backgroundColor: kPrimaryColor,
// //     borderRadius: kDefaultPadding / 2,
// //     padding: kDefaultPadding,
// //     width: cardWidth, // Use the calculated width here
// //   },
// //   dataCardTitle: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     color: kOtherColor,
// //   },
// //   dataCardValue: {
// //     fontSize: 16,
// //     color: kOtherColor,
// //   },
// //   content: {
// //     paddingHorizontal: kDefaultPadding,
// //     paddingTop: kDefaultPadding,
// //   },
// //   contentRow: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-around',
// //     marginBottom: kDefaultPadding,
// //   },
// //   homeCard: {
// //     alignItems: 'center',
// //     marginTop: 16, // Set a valid numeric value for marginTop
// //   },
// //   homeCardIcon: {
// //     width: 64,
// //     height: 64,
// //   },
// //   homeCardTitle: {
// //     marginTop: kDefaultPadding / 2,
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //   },
// // });

// // export default HomeScreen;




