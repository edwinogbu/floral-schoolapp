
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

// Define your colors and other constants here
const kPrimaryColor = '#253D84';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';
const kContainerColor = '#777777';
const kOtherColor = '#F4F6F7';
const kTextLightColor = '#A5A5A5';
const kErrorBorderColor = '#E74C3C';
const kDefaultPadding = 20;

const ContentRow = ({ icons, titles, onPress }) => {
  return (
    <TouchableOpacity style={styles.contentRow} onPress={onPress}>
      <View style={styles.iconContainer}>
        {/* Render your icons here */}
        {icons.map((icon, index) => (
          <Image key={index} source={icon} style={styles.icon} />
        ))}
      </View>
      <View style={styles.titleContainer}>
        {titles.map((title, index) => (
          <Text key={index} style={styles.title}>
            {title}
          </Text>
        ))}
      </View>
    </TouchableOpacity>
  );
};


const ProfileScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        {/* <Text style={styles.profileHeaderText}>My Profile</Text> */}
        <View style={styles.profileInfo}>
          <Image
            source={require('./../../assets/images/school-logo.png')}
            style={styles.profileImage}
          />
          <View style={styles.profileDetails}>
            <Text style={styles.profileName}>Aisha Mirza</Text>
            <Text style={styles.profileClass}>Class X-II | Roll no: 12</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('MyProfileScreen')}
            style={styles.profileReportContainer}
          >
            <Image
              source={require('./../../assets/images/school-logo.png')}
              style={styles.profileReportIcon}
            />
            <Text style={styles.profileReportText}>Report</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dataCards}>
        <DataCard title="Attendance" value="90.02%" onPress={() => {/* Go to attendance screen */}} />
        <DataCard title="Fees Due" value="600$" onPress={() => navigation.navigate('FeeScreen')} />
      </View>
      <View style={styles.content}>
        <ContentRow icons={['quiz', 'assignment']} titles={['Take Quiz', 'Assignments']} onPress={[() => {}, () => navigation.navigate('AssignmentScreen')]} />
        <ContentRow icons={['holiday', 'timetable']} titles={['Holidays', 'Time Table']} onPress={[() => {}, () => {}]} />
        <ContentRow icons={['result', 'datesheet']} titles={['Result', 'DateSheet']} onPress={[() => {}, () => navigation.navigate('DateSheetScreen')]} />
        <ContentRow icons={['ask', 'gallery']} titles={['Ask', 'Gallery']} onPress={[() => {}, () => {}]} />
        <ContentRow icons={['resume', 'lock']} titles={['Leave Application', 'Change Password']} onPress={[() => {}, () => {}]} />
        <ContentRow icons={['event', 'logout']} titles={['Events', 'Logout']} onPress={[() => {}, () => {}]} />
      </View>
    </ScrollView>
  );
};

const DataCard = ({ title, value, onPress }) => {
  return (
    <TouchableOpacity style={styles.dataCard} onPress={onPress}>
      <Text style={styles.dataCardTitle}>{title}</Text>
      <Text style={styles.dataCardValue}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kOtherColor,
  },
  profileHeader: {
    padding: kDefaultPadding,
    backgroundColor: kPrimaryColor, // Set the background color for the header
    marginBottom: kDefaultPadding,
    alignItems: 'center', // Center items horizontally
  },
  profileHeaderText: {
    fontSize: 24,
    color: kTextWhiteColor, // Set the text color for the header
    fontWeight: 'bold',
  },
  profileInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: kDefaultPadding,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: kSecondaryColor, // Set a background color for the image container
  },
  profileDetails: {
    marginLeft: kDefaultPadding,
  },
  profileName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: kTextWhiteColor, // Set the text color for the name
  },
  profileClass: {
    fontSize: 16,
    color: kTextWhiteColor, // Set the text color for the class
  },
  profileReportContainer: {
    alignItems: 'center',
  },
  profileReportIcon: {
    width: 32,
    height: 32,
  },
  profileReportText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: kTextBlackColor, // Set the text color for the report text
  },
  dataCards: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: kDefaultPadding,
  },
  dataCard: {
    alignItems: 'center',
    backgroundColor: kPrimaryColor,
    borderRadius: kDefaultPadding / 2,
    padding: kDefaultPadding,
    width: '40%',
    marginBottom: kDefaultPadding,
  },
  dataCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: kTextWhiteColor, // Set the text color for data card titles
  },
  dataCardValue: {
    fontSize: 16,
    color: kTextWhiteColor, // Set the text color for data card values
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: kOtherColor, // Use a consistent color for borders
    marginHorizontal: kDefaultPadding,
  },
  iconContainer: {
    marginRight: 16,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: kTextBlackColor, // Set the text color for titles
  },
});

export default ProfileScreen;



// import React from 'react';
// import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
// // import SvgUri from 'react-native-svg-uri'; // Make sure you have installed this package
// import { Dimensions } from 'react-native';

// const kPrimaryColor = '#345FB4';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kContainerColor = '#777777';
// const kOtherColor = '#F4F6F7';
// const kTextLightColor = '#A5A5A5';
// const kErrorBorderColor = '#E74C3C';
// const kDefaultPadding = 20;

// const ProfileScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.profileHeader}>
//         <Text style={styles.profileHeaderText}>My Profile</Text>
//         <View style={styles.profileInfo}>
//           <View style={styles.profileImageContainer}>
//             <Image
//               source={require('./assets/images/students_profile.jpg')}
//               style={styles.profileImage}
//             />
//           </View>
//           <View style={styles.profileDetails}>
//             <Text style={styles.profileName}>Aisha Mirza</Text>
//             <Text style={styles.profileClass}>Class X-II | Roll no: 12</Text>
//           </View>
//           <TouchableOpacity onPress={() => navigation.navigate('MyProfileScreen')}>
//             <Text style={styles.profileReport}>Report</Text>
//             <Image source={require('./assets/images/report.jpg')} style={styles.profileReportIcon} />
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.dataCards}>
//         <DataCard title="Attendance" value="90.02%" onPress={() => {/* Go to attendance screen */}} />
//         <DataCard title="Fees Due" value="600$" onPress={() => navigation.navigate('FeeScreen')} />
//       </View>
//       {/* Rest of your content */}
//       <View style={styles.content}>
//         <ContentRow icons={['quiz', 'assignment']} titles={['Take Quiz', 'Assignments']} onPress={[() => {}, () => navigation.navigate('AssignmentScreen')]} />
//         <ContentRow icons={['holiday', 'timetable']} titles={['Holidays', 'Time Table']} onPress={[() => {}, () => {}]} />
//         <ContentRow icons={['result', 'datesheet']} titles={['Result', 'DateSheet']} onPress={[() => {}, () => navigation.navigate('DateSheetScreen')]} />
//         <ContentRow icons={['ask', 'gallery']} titles={['Ask', 'Gallery']} onPress={[() => {}, () => {}]} />
//         <ContentRow icons={['resume', 'lock']} titles={['Leave Application', 'Change Password']} onPress={[() => {}, () => {}]} />
//         <ContentRow icons={['event', 'logout']} titles={['Events', 'Logout']} onPress={[() => {}, () => {}]} />
//       </View>
//     </ScrollView>
//   );
// };

// const DataCard = ({ title, value, onPress }) => {
//   return (
//     <TouchableOpacity style={styles.dataCard} onPress={onPress}>
//       <Text style={styles.dataCardTitle}>{title}</Text>
//       <Text style={styles.dataCardValue}>{value}</Text>
//     </TouchableOpacity>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kOtherColor,
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
//   },
//   profileClass: {
//     fontSize: 16,
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
//     justifyContent: 'space-around',
//     padding: kDefaultPadding,
//   },
//   dataCard: {
//     alignItems: 'center',
//     backgroundColor: kPrimaryColor,
//     borderRadius: kDefaultPadding / 2,
//     padding: kDefaultPadding,
//     width: '40%',
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
// });

// export default ProfileScreen;
