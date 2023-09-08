import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { Ionicons } from '@expo/vector-icons';



const announcementData = [
    {
      id: '1',
      title: `Floral set to establish Faculty of Architecture`,
      date: 'July 1, 2023',
      note: `
        Preparatory to the mounting of a Faculty of Architecture.
        
      `,
      icon: 'announcement',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '2',
      title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
      date: 'July 2, 2023',
      note: `FIRST TERM`,
      icon: 'notifications',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '3',
      title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
      date: 'July 2, 2023',
      note: `
        It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
        // Rest of the content...
      `,
      icon: 'notifications',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '4',
      title: `New Scholarship Opportunities for Students`,
      date: 'July 3, 2023',
      note: `
        Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
        // Rest of the content...
      `,
      icon: 'scholarship',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '5',
      title: `Upcoming Workshop on Digital Marketing`,
      date: 'July 4, 2023',
      note: `
        Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
       
      `,
      icon: 'workshop',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '6',
      title: `Important Update: Examination Schedule Change`,
      date: 'July 5, 2023',
      note: `
        Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
        // Rest of the content...
      `,
      icon: 'notifications',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '7',
      title: `University Sports Day: Join Us for a Fun Day`,
      date: 'July 6, 2023',
      note: `
        Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
        // Rest of the content...
      `,
      icon: 'event',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '8',
      title: `Call for Research Papers: International Conference`,
      date: 'July 7, 2023',
      note: `
        We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
        // Rest of the content...
      `,
      icon: 'research',
      image: require('./../../assets/images/three-student.png'),
    },
    {
      id: '9',
      title: `Important Update: Library Hours Extended`,
      date: 'July 8, 2023',
      note: `
        Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
        Rest of the content...
      `,
      icon: 'notifications',
      image: require('./../../assets/images/three-student.png'),
    },
  ];

  const AnnouncementScreen = ({ navigation }) => {
    const renderAnnouncementCards = () => {
      return announcementData.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.swiperCard}
          onPress={() =>
            navigation.navigate('AnnouncementDetailScreen', { announcement: item })
          }
        >
          <Image
            source={item.image}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text numberOfLines={3} style={styles.cardNote}>
            {item.note}
          </Text>
          <View style={styles.cardFooter}>
            <View style={styles.dateTimeContainer}>
              <Ionicons name="calendar" size={16} color="#253D84" />
              <Text style={styles.cardDate}>{item.date}</Text>
              <Ionicons name="time" size={16} color="#253D84" />
              <Text style={styles.cardTime}>12:00 PM</Text>
            </View>
            <TouchableOpacity style={styles.readMoreContainer}>
              <Text style={styles.readMoreLink}>Read More</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      ));
    };
  
    const renderLatestNews = () => {
      return (
        <FlatList
          data={announcementData}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.latestNewsCard}
              onPress={() =>
                navigation.navigate('AnnouncementDetailScree', { announcement: item })
              }
            >
              <Image
                source={item.image}
                style={styles.latestNewsImage}
                resizeMode="cover"
              />
              <Text style={styles.latestNewsTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      );
    };
  
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          {/* <Text style={styles.headerText}>Announcements</Text> */}
        </View>
  
        {/* Swiper for News Cards */}
        <View style={styles.swiperContainer}>
          <Swiper>{renderAnnouncementCards()}</Swiper>
        </View>
  
        {/* Latest News */}
        <View style={styles.latestNewsContainer}>
          <Text style={styles.latestNewsTitleText}>Latest News</Text>
          {renderLatestNews()}
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F0F2F5', // Custom background color
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: '#253D84',
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 26, // Custom font size
      marginLeft: 16,
      fontWeight: 'bold',
      textTransform: 'uppercase', // Uppercase header text
    },
    swiperContainer: {
      height: 300, // Set a specific height for the Swiper container
    },
    swiperCard: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginHorizontal: 16,
      borderRadius: 15, // Custom border radius
      backgroundColor: '#FFFFFF', // Custom card background color
      overflow: 'hidden',
      maxWidth: '100%',
      shadowColor: '#000000', // Custom shadow color
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1, // Custom shadow opacity
      shadowRadius: 5, // Custom shadow radius
      elevation: 5, // Android elevation
    },
    cardImage: {
      width: '100%',
      height: 200,
      borderRadius: 15, // Custom image border radius
    },
    cardTitle: {
      color: '#253D84',
      fontSize: 22, // Custom font size
      fontWeight: 'bold',
      marginTop: 10,
      paddingHorizontal: 16,
    },
    cardNote: {
      color: '#555',
      fontSize: 18, // Custom font size
      marginTop: 10,
      paddingHorizontal: 16,
    },
    cardFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 16,
      paddingVertical: 12, // Custom padding
    },
    dateTimeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardDate: {
      color: '#555',
      fontSize: 16, // Custom font size
      marginLeft: 5,
    },
    cardTime: {
      color: '#555',
      fontSize: 16, // Custom font size
    },
    readMoreContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#253D84',
      borderRadius: 25, // Custom button border radius
      paddingHorizontal: 16,
      paddingVertical: 10, // Custom button padding
    },
    readMoreLink: {
      color: '#FFFFFF',
      fontSize: 18, // Custom font size
      fontWeight: 'bold',
      marginLeft: 8,
    },
    latestNewsContainer: {
      backgroundColor: '#FFFFFF',
      paddingVertical: 16,
      paddingHorizontal: 16,
    },
    latestNewsTitleText: {
      color: '#253D84',
      fontSize: 26, // Custom font size
      fontWeight: 'bold',
      marginBottom: 16,
      textTransform: 'uppercase', // Uppercase latest news title
    },
    latestNewsCard: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 15, // Custom card border radius
      margin: 8,
      overflow: 'hidden',
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 5,
    },
    latestNewsImage: {
      width: '100%',
      height: 150,
      borderRadius: 15, // Custom image border radius
    },
    latestNewsTitle: {
      color: '#253D84',
      fontSize: 20, // Custom font size
      fontWeight: 'bold',
      marginVertical: 10,
    },
  });
  
  export default AnnouncementScreen;


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import Swiper from 'react-native-swiper/src';
// import { Ionicons } from '@expo/vector-icons';



// const announcementData = [
//     {
//       id: '1',
//       title: `Floral set to establish Faculty of Architecture`,
//       date: 'July 1, 2023',
//       note: `
//         Preparatory to the mounting of a Faculty of Architecture.
        
//       `,
//       icon: 'announcement',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '2',
//       title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
//       date: 'July 2, 2023',
//       note: `FIRST TERM`,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '3',
//       title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
//       date: 'July 2, 2023',
//       note: `
//         It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '4',
//       title: `New Scholarship Opportunities for Students`,
//       date: 'July 3, 2023',
//       note: `
//         Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
//         // Rest of the content...
//       `,
//       icon: 'scholarship',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '5',
//       title: `Upcoming Workshop on Digital Marketing`,
//       date: 'July 4, 2023',
//       note: `
//         Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
       
//       `,
//       icon: 'workshop',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '6',
//       title: `Important Update: Examination Schedule Change`,
//       date: 'July 5, 2023',
//       note: `
//         Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '7',
//       title: `University Sports Day: Join Us for a Fun Day`,
//       date: 'July 6, 2023',
//       note: `
//         Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
//         // Rest of the content...
//       `,
//       icon: 'event',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '8',
//       title: `Call for Research Papers: International Conference`,
//       date: 'July 7, 2023',
//       note: `
//         We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
//         // Rest of the content...
//       `,
//       icon: 'research',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '9',
//       title: `Important Update: Library Hours Extended`,
//       date: 'July 8, 2023',
//       note: `
//         Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
//         Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//   ];


// const AnnouncementScreen = ({ navigation }) => {
//   const renderAnnouncementCards = () => {
//     return announcementData.map((item) => (
//       <TouchableOpacity
//         key={item.id}
//         style={styles.swiperCard}
//         onPress={() =>
//           navigation.navigate('AnnouncementDetail', { announcement: item })
//         }
//       >
//         <Image
//           source={item.image}
//           style={styles.cardImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.cardTitle}>{item.title}</Text>
//         <Text numberOfLines={3} style={styles.cardNote}>
//           {item.note}
//         </Text>
//         <View style={styles.cardFooter}>
//           <View style={styles.dateTimeContainer}>
//             <Ionicons name="calendar" size={16} color="#253D84" />
//             <Text style={styles.cardDate}>{item.date}</Text>
//             <Ionicons name="time" size={16} color="#253D84" />
//             <Text style={styles.cardTime}>12:00 PM</Text>
//           </View>
//           <TouchableOpacity style={styles.readMoreContainer}>
//             <Text style={styles.readMoreLink}>Read More</Text>
//           </TouchableOpacity>
//         </View>
//       </TouchableOpacity>
//     ));
//   };

//   const renderLatestNews = () => {
//     return (
//       <FlatList
//         data={announcementData}
//         keyExtractor={(item) => item.id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.latestNewsCard}
//             onPress={() =>
//               navigation.navigate('AnnouncementDetail', { announcement: item })
//             }
//           >
//             <Image
//               source={item.image}
//               style={styles.latestNewsImage}
//               resizeMode="cover"
//             />
//             <Text style={styles.latestNewsTitle}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Announcements</Text>
//       </View>

//       {/* Swiper for News Cards */}
//       <Swiper style={styles.swiperContainer}>{renderAnnouncementCards()}</Swiper>

//       {/* Latest News */}
//       <View style={styles.latestNewsContainer}>
//         <Text style={styles.latestNewsTitleText}>Latest News</Text>
//         {renderLatestNews()}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#F0F2F5', // Custom background color
//     },
//     header: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       padding: 16,
//       backgroundColor: '#253D84',
//     },
//     headerText: {
//       color: '#FFFFFF',
//       fontSize: 26, // Custom font size
//       marginLeft: 16,
//       fontWeight: 'bold',
//       textTransform: 'uppercase', // Uppercase header text
//     },
//     swiperContainer: {
//       height: 300,
//     },
//     swiperCard: {
//       flex: 1,
//       justifyContent: 'flex-start',
//       alignItems: 'center',
//       marginHorizontal: 16,
//       borderRadius: 15, // Custom border radius
//       backgroundColor: '#FFFFFF', // Custom card background color
//       overflow: 'hidden',
//       maxWidth: '100%',
//       shadowColor: '#000000', // Custom shadow color
//       shadowOffset: {
//         width: 0,
//         height: 4,
//       },
//       shadowOpacity: 0.1, // Custom shadow opacity
//       shadowRadius: 5, // Custom shadow radius
//       elevation: 5, // Android elevation
//     },
//     cardImage: {
//       width: '100%',
//       height: 200,
//       borderRadius: 15, // Custom image border radius
//     },
//     cardTitle: {
//       color: '#253D84',
//       fontSize: 22, // Custom font size
//       fontWeight: 'bold',
//       marginTop: 10,
//       paddingHorizontal: 16,
//     },
//     cardNote: {
//       color: '#555',
//       fontSize: 18, // Custom font size
//       marginTop: 10,
//       paddingHorizontal: 16,
//     },
//     cardFooter: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       paddingHorizontal: 16,
//       paddingVertical: 12, // Custom padding
//     },
//     dateTimeContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//     },
//     cardDate: {
//       color: '#555',
//       fontSize: 16, // Custom font size
//       marginLeft: 5,
//     },
//     cardTime: {
//       color: '#555',
//       fontSize: 16, // Custom font size
//     },
//     readMoreContainer: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       backgroundColor: '#253D84',
//       borderRadius: 25, // Custom button border radius
//       paddingHorizontal: 16,
//       paddingVertical: 10, // Custom button padding
//     },
//     readMoreLink: {
//       color: '#FFFFFF',
//       fontSize: 18, // Custom font size
//       fontWeight: 'bold',
//       marginLeft: 8,
//     },
//     latestNewsContainer: {
//       backgroundColor: '#FFFFFF',
//       paddingVertical: 16,
//       paddingHorizontal: 16,
//     },
//     latestNewsTitleText: {
//       color: '#253D84',
//       fontSize: 26, // Custom font size
//       fontWeight: 'bold',
//       marginBottom: 16,
//       textTransform: 'uppercase', // Uppercase latest news title
//     },
//     latestNewsCard: {
//       flex: 1,
//       backgroundColor: '#FFFFFF',
//       borderRadius: 15, // Custom card border radius
//       margin: 8,
//       overflow: 'hidden',
//       shadowColor: '#000000',
//       shadowOffset: {
//         width: 0,
//         height: 4,
//       },
//       shadowOpacity: 0.1,
//       shadowRadius: 5,
//       elevation: 5,
//     },
//     latestNewsImage: {
//       width: '100%',
//       height: 150,
//       borderRadius: 15, // Custom image border radius
//     },
//     latestNewsTitle: {
//       color: '#253D84',
//       fontSize: 20, // Custom font size
//       fontWeight: 'bold',
//       marginVertical: 10,
//     },
//   });
  
//   export default AnnouncementScreen;


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import Swiper from 'react-native-swiper/src';
// import { Ionicons } from '@expo/vector-icons';



// const announcementData = [
//     {
//       id: '1',
//       title: `Floral set to establish Faculty of Architecture`,
//       date: 'July 1, 2023',
//       note: `
//         Preparatory to the mounting of a Faculty of Architecture.
        
//       `,
//       icon: 'announcement',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '2',
//       title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
//       date: 'July 2, 2023',
//       note: `FIRST TERM`,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '3',
//       title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
//       date: 'July 2, 2023',
//       note: `
//         It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '4',
//       title: `New Scholarship Opportunities for Students`,
//       date: 'July 3, 2023',
//       note: `
//         Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
//         // Rest of the content...
//       `,
//       icon: 'scholarship',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '5',
//       title: `Upcoming Workshop on Digital Marketing`,
//       date: 'July 4, 2023',
//       note: `
//         Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
       
//       `,
//       icon: 'workshop',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '6',
//       title: `Important Update: Examination Schedule Change`,
//       date: 'July 5, 2023',
//       note: `
//         Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '7',
//       title: `University Sports Day: Join Us for a Fun Day`,
//       date: 'July 6, 2023',
//       note: `
//         Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
//         // Rest of the content...
//       `,
//       icon: 'event',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '8',
//       title: `Call for Research Papers: International Conference`,
//       date: 'July 7, 2023',
//       note: `
//         We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
//         // Rest of the content...
//       `,
//       icon: 'research',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '9',
//       title: `Important Update: Library Hours Extended`,
//       date: 'July 8, 2023',
//       note: `
//         Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
//         Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//   ];


// const AnnouncementScreen = ({ navigation }) => {
//   const renderAnnouncementCards = () => {
//     return announcementData.map((item) => (
//       <TouchableOpacity
//         key={item.id}
//         style={styles.swiperCard}
//         onPress={() =>
//           navigation.navigate('AnnouncementDetail', { announcement: item })
//         }
//       >
//         <Image
//           source={item.image}
//           style={styles.cardImage}
//           resizeMode="cover"
//         />
//         <Text style={styles.cardTitle}>{item.title}</Text>
//         <Text numberOfLines={3} style={styles.cardNote}>
//           {item.note}
//         </Text>
//         <View style={styles.cardFooter}>
//           <View style={styles.dateTimeContainer}>
//             <Ionicons name="calendar" size={16} color="#253D84" />
//             <Text style={styles.cardDate}>{item.date}</Text>
//             <Ionicons name="time" size={16} color="#253D84" />
//             <Text style={styles.cardTime}>12:00 PM</Text>
//           </View>
//           <Text style={styles.readMoreLink}>Read More</Text>
//         </View>
//       </TouchableOpacity>
//     ));
//   };

//   const renderLatestNews = () => {
//     return (
//       <FlatList
//         horizontal
//         data={announcementData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.latestNewsCard}
//             onPress={() =>
//               navigation.navigate('AnnouncementDetail', { announcement: item })
//             }
//           >
//             <Image
//               source={item.image}
//               style={styles.latestNewsImage}
//               resizeMode="cover"
//             />
//             <Text style={styles.latestNewsTitle}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.headerText}>Announcements</Text>
//       </View>

//       {/* Swiper for News Cards */}
//       <Swiper style={styles.swiperContainer}>{renderAnnouncementCards()}</Swiper>

//       {/* Latest News */}
//       <View style={styles.latestNewsContainer}>
//         <Text style={styles.latestNewsTitleText}>Latest News</Text>
//         {renderLatestNews()}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#253D84',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginLeft: 16,
//   },
//   swiperContainer: {
//     height: 350,
//   },
//   swiperCard: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     borderRadius: 10,
//     backgroundColor: '#FFF',
//     overflow: 'hidden',
//   },
//   cardImage: {
//     width: '100%',
//     height: '40%',
//     borderRadius: 10,
//   },
//   cardTitle: {
//     color: '#253D84',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingHorizontal: 16,
//   },
//   cardNote: {
//     color: '#253D84',
//     fontSize: 16,
//     marginTop: 5,
//     paddingHorizontal: 16,
//   },
//   readMoreLink: {
//     color: '#253D84',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     marginTop:20,
//   },
//   latestNewsContainer: {
//     backgroundColor: '#FFF',
//     paddingVertical: 16,
//   },
//   latestNewsTitleText: {
//     color: '#253D84',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 16,
//     marginBottom: 10,
//   },
//   latestNewsCard: {
//     width: 200,
//     marginHorizontal: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   latestNewsImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 10,
//   },
//   cardFooter: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   dateTimeContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   cardDate: {
//     color: '#253D84',
//     fontSize: 14,
//     marginLeft: 5,
//   },
//   cardTime: {
//     color: '#253D84',
//     fontSize: 14,
//     marginLeft: 10,
//   },
// });

// export default AnnouncementScreen;


// import React from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   FlatList,
// } from 'react-native';
// import Swiper from 'react-native-swiper/src';
// import { Ionicons } from '@expo/vector-icons';




// const announcementData = [
//     {
//       id: '1',
//       title: `Floral set to establish Faculty of Architecture`,
//       date: 'July 1, 2023',
//       note: `
//         Preparatory to the mounting of a Faculty of Architecture.
        
//       `,
//       icon: 'announcement',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '2',
//       title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
//       date: 'July 2, 2023',
//       note: `FIRST TERM`,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '3',
//       title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
//       date: 'July 2, 2023',
//       note: `
//         It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '4',
//       title: `New Scholarship Opportunities for Students`,
//       date: 'July 3, 2023',
//       note: `
//         Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
//         // Rest of the content...
//       `,
//       icon: 'scholarship',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '5',
//       title: `Upcoming Workshop on Digital Marketing`,
//       date: 'July 4, 2023',
//       note: `
//         Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
       
//       `,
//       icon: 'workshop',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '6',
//       title: `Important Update: Examination Schedule Change`,
//       date: 'July 5, 2023',
//       note: `
//         Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '7',
//       title: `University Sports Day: Join Us for a Fun Day`,
//       date: 'July 6, 2023',
//       note: `
//         Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
//         // Rest of the content...
//       `,
//       icon: 'event',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '8',
//       title: `Call for Research Papers: International Conference`,
//       date: 'July 7, 2023',
//       note: `
//         We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
//         // Rest of the content...
//       `,
//       icon: 'research',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '9',
//       title: `Important Update: Library Hours Extended`,
//       date: 'July 8, 2023',
//       note: `
//         Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
//         Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//   ];

// const AnnouncementScreen = ({ navigation }) => {
// //   const renderAnnouncementCards = () => {
// //     return announcementData.map((item) => (
// //       <TouchableOpacity
// //         key={item.id}
// //         style={styles.swiperCard}
// //         onPress={() =>
// //           navigation.navigate('AnnouncementDetail', { announcement: item })
// //         }
// //       >
// //         <Image
// //           source={item.image}
// //           style={styles.cardImage}
// //           resizeMode="contain"
// //         />
// //         <Text style={styles.cardTitle}>{item.title}</Text>
// //         <Text numberOfLines={3} style={styles.cardNote}>
// //           {item.note}
// //         </Text>
// //          <View style={{flexDirection:'row'}}>
// //           <Ionicons name="calendar" size={24} color="#253D84" />
// //           <Text style={styles.cardDate}>{item.date}</Text>
// //           <View style={{ flex: 1 }} />
// //           <Ionicons name="time" size={24} color="#253D84" />
// //           <Text style={styles.cardTime}>12:00 PM</Text>
// //         <Text style={styles.readMoreLink}>Read More</Text>
// //         </View>
// //       </TouchableOpacity>
// //     ));
// //   };


// const renderAnnouncementCards = () => {
//     return announcementData.map((item) => (
//       <TouchableOpacity
//         key={item.id}
//         style={styles.swiperCard}
//         onPress={() =>
//           navigation.navigate('AnnouncementDetail', { announcement: item })
//         }
//       >
//         <Image
//           source={item.image}
//           style={styles.cardImage}
//           resizeMode="contain"
//         />
//         <Text style={styles.cardTitle}>{item.title}</Text>
//         <Text numberOfLines={3} style={styles.cardNote}>
//           {item.note}
//         </Text>
//         <View style={styles.cardFooter}>
//           <View style={styles.dateTimeContainer}>
//             <Ionicons name="calendar" size={16} color="#253D84" />
//             <Text style={styles.cardDate}>{item.date}</Text>
//             <Ionicons name="time" size={16} color="#253D84" />
//             <Text style={styles.cardTime}>12:00 PM</Text>
//           </View>
//           <Text style={styles.readMoreLink}>Read More</Text>
//         </View>
//       </TouchableOpacity>
//     ));
//   };
  
//   const renderLatestNews = () => {
//     return (
//       <FlatList
//         horizontal
//         data={announcementData}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <TouchableOpacity
//             style={styles.latestNewsCard}
//             onPress={() =>
//               navigation.navigate('AnnouncementDetail', { announcement: item })
//             }
//           >
//             <Image
//               source={item.image}
//               style={styles.latestNewsImage}
//               resizeMode="contain"
//             />
//             <Text style={styles.latestNewsTitle}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         {/* <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color={styles.headerText.color} />
//         </TouchableOpacity> */}
//         <Text style={styles.headerText}>Announcements</Text>
//       </View>

//       {/* Swiper for News Cards */}
//       <Swiper style={styles.swiperContainer}>{renderAnnouncementCards()}</Swiper>

//       {/* Latest News */}
//       <View style={styles.latestNewsContainer}>
//         <Text style={styles.latestNewsTitleText}>Latest News</Text>
//         {renderLatestNews()}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#253D84',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     marginLeft: 16,
//   },
//   swiperContainer: {
//     height: 300,
//     width:'auto',
//   },
//   swiperCard: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     borderRadius: 10,
//     backgroundColor: '#FFF',
//     overflow: 'hidden',
//   },
//   cardImage: {
//     width: '100%',
//     height: '40%',
//     borderRadius: 10,
//     resizeMode:'cover'
//   },
//   cardTitle: {
//     color: '#253D84',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingHorizontal: 16,
//   },
//   cardNote: {
//     color: '#253D84',
//     fontSize: 1,
//     marginTop: 5,
//     fontWeight: 'bold',
//     paddingHorizontal: 16,
//   },
//   readMoreLink: {
//     color: '#253D84',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
//   latestNewsContainer: {
//     backgroundColor: '#FFF',
//     paddingVertical: 16,
//   },
//   latestNewsTitleText: {
//     color: '#253D84',
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginLeft: 16,
//     marginBottom: 10,
//   },
//   latestNewsCard: {
//     width: 200,
//     marginHorizontal: 10,
//     backgroundColor: '#FFF',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   latestNewsImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 10,
//   },
//   latestNewsTitle: {
//     color: '#253D84',
//     fontSize: 16,
//     fontWeight: 'bold',
//     margin: 10,
//   },




//   cardFooter: {
//     flexDirection: 'column', // Change to column layout
//     alignItems: 'center', // Align items to the start (left)
//     paddingHorizontal: 16,
//     marginTop: 10,
//   },
//   dateTimeContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     justifyContent:'space-between'
//   },
//   cardDate: {
//     color: '#253D84',
//     fontSize: 14,
//     marginLeft: 5,
//     justifyContent:'space-between',

//   },
//   cardTime: {
//     color: '#253D84',
//     fontSize: 14,
//     marginLeft: 10,
//     justifyContent:'space-between',

//   },
//   readMoreLink: {
//     color: '#253D84',
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginTop: 10, // Add margin top to create space between date/time and "Read More"
//   },

// });

// export default AnnouncementScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Swiper from 'react-native-swiper/src';
// import { Ionicons, Entypo } from '@expo/vector-icons';

// const kPrimaryColor = '#253D84';
// const kTextWhiteColor = '#FFFFFF';


// const announcementData = [
//     {
//       id: '1',
//       title: `Floral set to establish Faculty of Architecture`,
//       date: 'July 1, 2023',
//       note: `
//         Preparatory to the mounting of a Faculty of Architecture.
        
//       `,
//       icon: 'announcement',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '2',
//       title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
//       date: 'July 2, 2023',
//       note: `FIRST TERM`,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '3',
//       title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
//       date: 'July 2, 2023',
//       note: `
//         It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '4',
//       title: `New Scholarship Opportunities for Students`,
//       date: 'July 3, 2023',
//       note: `
//         Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
//         // Rest of the content...
//       `,
//       icon: 'scholarship',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '5',
//       title: `Upcoming Workshop on Digital Marketing`,
//       date: 'July 4, 2023',
//       note: `
//         Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
//         // Rest of the content...
//       `,
//       icon: 'workshop',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '6',
//       title: `Important Update: Examination Schedule Change`,
//       date: 'July 5, 2023',
//       note: `
//         Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
//         // Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '7',
//       title: `University Sports Day: Join Us for a Fun Day`,
//       date: 'July 6, 2023',
//       note: `
//         Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
//         // Rest of the content...
//       `,
//       icon: 'event',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '8',
//       title: `Call for Research Papers: International Conference`,
//       date: 'July 7, 2023',
//       note: `
//         We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
//         // Rest of the content...
//       `,
//       icon: 'research',
//       image: require('./../../assets/images/three-student.png'),
//     },
//     {
//       id: '9',
//       title: `Important Update: Library Hours Extended`,
//       date: 'July 8, 2023',
//       note: `
//         Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
//         Rest of the content...
//       `,
//       icon: 'notifications',
//       image: require('./../../assets/images/three-student.png'),
//     },
//   ];

// const AnnouncementScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color={kTextWhiteColor} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Announcements</Text>
//       </View>

//       {/* Swiper for News Cards */}
//       <Swiper style={styles.swiperContainer}>
//         {announcementData.map((item) => (
//           <TouchableOpacity
//             key={item.id}
//             style={styles.swiperCard}
//             onPress={() => navigation.navigate('AnnouncementDetail', { announcement: item })}
//           >
//             <Image
//               source={item.image}
//               style={styles.cardImage}
//               resizeMode="contain"
//             />
//             <Text style={styles.cardTitle}>{item.title}</Text>
//             <Text numberOfLines={3} style={styles.cardNote}>
//               {item.note}
//             </Text>
//             <Text style={styles.readMoreLink}>Read More</Text>
//           </TouchableOpacity>
//         ))}
//       </Swiper>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 16,
//   },
//   headerText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     marginLeft: 16,
//   },
//   swiperContainer: {
//     height: 200,
//   },
//   swiperCard: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     marginHorizontal: 16,
//     borderRadius: 10,
//     backgroundColor: '#FFF', // Background color for each card
//     overflow: 'hidden',
//   },
//   cardImage: {
//     width: '40%',
//     height: '40%',
//     borderRadius: 10,
//   },
//   cardTitle: {
//     color: kPrimaryColor, // Title color
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 10,
//     paddingHorizontal: 16,
//   },
//   cardNote: {
//     color: kTextWhiteColor,
//     fontSize: 14,
//     marginTop: 5,
//     paddingHorizontal: 16,
//   },
//   readMoreLink: {
//     color: kPrimaryColor,
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginVertical: 10,
//   },
// });

// export default AnnouncementScreen;


// import React from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
// import Swiper from 'react-native-swiper/src';
// import { Ionicons, Entypo } from '@expo/vector-icons';

// const kPrimaryColor = '#253D84';
// const kTextWhiteColor = '#FFFFFF';

// const announcementData = [
//   {
//     id: '1',
//     title: `Floral set to establish Faculty of Architecture`,
//     date: 'July 1, 2023',
//     note: `
//       Preparatory to the mounting of a Faculty of Architecture.
      
//     `,
//     icon: 'announcement',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '2',
//     title: `Approved First Semester Academic Calendar for 2020/2021 Academic Session (for Fresh & Regular Students)`,
//     date: 'July 2, 2023',
//     note: `FIRST TERM`,
//     icon: 'notifications',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '3',
//     title: `DISCLAIMER: BSU Vice-Chancellor Disowns Social Media Accounts`,
//     date: 'July 2, 2023',
//     note: `
//       It has come to the attention of Management of Benue State University that some fraudsters have opened some social media accounts (WhatsApp and Facebook) with the view to defraud members of the public through promise of contract awards and employment.
//       // Rest of the content...
//     `,
//     icon: 'notifications',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '4',
//     title: `New Scholarship Opportunities for Students`,
//     date: 'July 3, 2023',
//     note: `
//       Benue State University is pleased to announce new scholarship opportunities for undergraduate and postgraduate students. Scholarships are available in various fields of study.
//       // Rest of the content...
//     `,
//     icon: 'scholarship',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '5',
//     title: `Upcoming Workshop on Digital Marketing`,
//     date: 'July 4, 2023',
//     note: `
//       Don't miss our upcoming workshop on digital marketing, where industry experts will share their insights and strategies for success in the digital age.
//       // Rest of the content...
//     `,
//     icon: 'workshop',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '6',
//     title: `Important Update: Examination Schedule Change`,
//     date: 'July 5, 2023',
//     note: `
//       Due to unforeseen circumstances, the examination schedule for the upcoming semester has been changed. Please review the new schedule.
//       // Rest of the content...
//     `,
//     icon: 'notifications',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '7',
//     title: `University Sports Day: Join Us for a Fun Day`,
//     date: 'July 6, 2023',
//     note: `
//       Get ready for a day of fun and excitement at our annual University Sports Day event! Join us for various sports and games.
//       // Rest of the content...
//     `,
//     icon: 'event',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '8',
//     title: `Call for Research Papers: International Conference`,
//     date: 'July 7, 2023',
//     note: `
//       We are inviting researchers to submit their papers for our upcoming international conference on cutting-edge topics in science and technology.
//       // Rest of the content...
//     `,
//     icon: 'research',
//     image: require('./../../assets/images/three-student.png'),
//   },
//   {
//     id: '9',
//     title: `Important Update: Library Hours Extended`,
//     date: 'July 8, 2023',
//     note: `
//       Good news! The university library hours have been extended to accommodate students' study needs. Check the new hours here.
//       Rest of the content...
//     `,
//     icon: 'notifications',
//     image: require('./../../assets/images/three-student.png'),
//   },
// ];

// const AnnouncementScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Ionicons name="arrow-back" size={24} color={kTextWhiteColor} />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Announcements</Text>
//       </View>

//       {/* Swiper for Blog News Cards */}
//       <Swiper style={styles.swiperContainer}>
//         {announcementData.map((item) => (
//           <View
//             key={item.id}
//             style={[styles.swiperCard, { backgroundColor: kPrimaryColor }]}
//           >
//             <Image
//               source={item.image}
//               style={styles.cardImage}
//               resizeMode="cover"
//             />
//             <Text style={styles.cardTitle}>{item.title}</Text>
//             <Text style={styles.cardDate}>{item.date}</Text>
//           </View>
//         ))}
//       </Swiper>



//       {/* Row for Recent News */}
//       <View style={styles.newsRow}>
//         {announcementData.slice(3).map((item) => (
//           <View
//             key={item.id}
//             style={[styles.newsCard, { backgroundColor: kPrimaryColor }]}
//           >
//             <Text style={styles.newsTitle}>{item.title}</Text>
//             <Text style={styles.newsDate}>{item.date}</Text>
//           </View>
//         ))}
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: kPrimaryColor,
//     },
//     header: {
//       flexDirection: 'row',
//       alignItems: 'center',
//       padding: 16,
//     },
//     headerText: {
//       color: kTextWhiteColor,
//       fontSize: 18,
//       marginLeft: 16,
//     },
//     swiperContainer: {
//       height: 200,
//     },
//     swiperCard: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginHorizontal: 16,
//       borderRadius: 10,
//     },
//     cardImage: {
//       width: '100%',
//       height: '70%',
//       borderRadius: 10,
//     },
//     cardTitle: {
//       color: kTextWhiteColor,
//       fontSize: 16,
//       fontWeight: 'bold',
//       marginTop: 10,
//     },
//     cardDate: {
//       color: kTextWhiteColor,
//       fontSize: 12,
//       marginTop: 5,
//     },
//     newsRow: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       marginTop: 20,
//       paddingHorizontal: 16,
//     },
//     newsCard: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginHorizontal: 8,
//       borderRadius: 10,
//       padding: 10,
//     },
//     newsTitle: {
//       color: kTextWhiteColor,
//       fontSize: 14,
//       fontWeight: 'bold',
//       textAlign: 'center',
//     },
//     newsDate: {
//       color: kTextWhiteColor,
//       fontSize: 12,
//       marginTop: 5,
//       textAlign: 'center',
//     },
//   });
  
//   export default AnnouncementScreen;
  