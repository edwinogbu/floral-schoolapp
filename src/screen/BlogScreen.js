import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper/src';
import { Ionicons, Entypo } from '@expo/vector-icons';
import axios from 'axios'; // Import Axios

const kPrimaryColor = '#253D84';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';

const BlogScreen = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
//   const apiUrl = 'http://192.168.127.39:8082'; 
  const apiUrl = 'http://192.168.127.39:8082/myapp'; 
//   const apiUrl = 'http://192.168.127.39:8082/myapp/api/blogs/view'; 
//   const apiUrl = 'http://localhost:8082/myapp/api/blogs/view'; // Replace with your machine's IP address and port
//   const apiUrl = 'http://localhost:8082/myapp/api/blogs/view'; // Replace with your machine's IP address and port

  useEffect(() => {
    // Fetch blogs from the backend when the component mounts
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(apiUrl + '/api/blogs/view'); // Use Axios to send a GET request
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };


    const renderAnnouncementCards = () => {
      return blogs.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.swiperCard}
          onPress={() =>
            navigation.navigate('AnnouncementDetailScreen', { announcement: item })
          }
        >
          <Image
            source={item.imageUrl}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text numberOfLines={2} style={styles.cardNote}>
            {item.note}
            <TouchableOpacity style={styles.readMoreContainer}>
              <Text style={styles.readMoreLink}   onPress={() =>
            navigation.navigate('AnnouncementDetailScreen', { announcement: item })
          }>Read More</Text>
            </TouchableOpacity>
          </Text>
          <View style={styles.cardFooter}>
            <View style={styles.dateTimeContainer}>
              <Text style={styles.cardDate}>
                  <Ionicons name="calendar" size={20} color="#253D84" />
                  {item.date}
              </Text>
              <Text style={styles.cardTime}>
                  <Ionicons name="time" size={20} color="#253D84" />
                  12:00 PM
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ));
    };
  
    const renderLatestNews = () => {
      return (
        <FlatList
          data={blogs}
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
                source={item.imageUrl}
                style={styles.latestNewsImage}
                resizeMode="cover"
              />
              <Text style={styles.latestNewsTitle}>{item.title}</Text>
              <Text style={styles.latestNewsNote}>{item.note}</Text>
              
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
          <Text style={styles.latestNewsTitleText}>More New
           <Entypo size={20} name='select-arrows' />
          </Text>
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
      width: '90%',
      height: 170,
      borderRadius: 5, // Custom image border radius
    },
    cardTitle: {
      color: '#253D84',
      fontSize: 18, // Custom font size
      fontWeight: 'bold',
      marginTop: 10,
      paddingHorizontal: 16,
    },
    cardNote: {
      color: '#555',
      fontSize: 14, // Custom font size
      marginTop: 2,
      paddingHorizontal: 10,
      justifyContent: 'flex-start',
      fontWeight: 'bold',


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
      justifyContent: 'space-between',

    },
    cardDate: {
      color: '#555',
      fontSize: 16, // Custom font size
      marginLeft: 5,
      fontWeight: 'bold',
      paddingLeft:25,    
    },
    cardTime: {
      color: '#555',
      fontSize: 16, // Custom font size
      fontWeight: 'bold',
      justifyContent: 'space-between',
       paddingLeft:25,
    },
    readMoreContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#253D84',
      borderRadius: 25, // Custom button border radius
      paddingHorizontal: 16,
      paddingVertical: 10, // Custom button padding
      paddingTop:10,
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
      paddingHorizontal: 1,
    },
    latestNewsTitleText: {
      color: '#253D84',
      fontSize: 18, // Custom font size
      fontWeight: 'bold',
      marginBottom: 16,
      textTransform: 'uppercase', // Uppercase latest news title
      textAlign:'center'
    },
    latestNewsNote:{
      color: '#000',
      fontSize: 14, // Custom font size
      fontWeight: 'bold',
      marginBottom: 16,
    },
    latestNewsCard: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 5, // Custom card border radius
      margin: 4,
      paddingHorizontal:5,
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
      width: '80%',
      height: 100,
      borderRadius: 15, // Custom image border radius
    },
    latestNewsTitle: {
      color:kTextBlackColor,
      fontSize: 18, // Custom font size
      fontWeight: 'bold',
      marginVertical: 10,
    },
    latestNewsNote: {
      color:kTextBlackColor,
      fontSize: 12, // Custom font size
      fontWeight: 'bold',
      marginVertical: 10,
    },
  });
  
  export default BlogScreen;

