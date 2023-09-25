// import React, { useState, useRef, useEffect } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview';
// import { Header } from 'react-native-elements';
// import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
// import axios from 'axios'; // Import axios for making HTTP requests

// const kPrimaryColor = '#253D84';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kTextLightColor = '#A5A5A5';

// const CustomPicker = ({ selectedValue, onValueChange }) => {
//   const paymentChannels = ['card', 'bank', 'ussd'];
//   const [modalVisible, setModalVisible] = useState(false);
//   const [hoveredOption, setHoveredOption] = useState(null);

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.dropdownContainer}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Select Payment Channel'}
//         </Text>
//         <FontAwesome5
//           name="chevron-down"
//           size={16}
//           color={kTextBlackColor}
//           style={styles.dropdownIcon}
//         />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {paymentChannels.map((channel) => (
//               <TouchableOpacity
//                 key={channel}
//                 onPress={() => {
//                   onValueChange(channel);
//                   setModalVisible(false);
//                 }}
//                 style={[
//                   styles.modalOption,
//                   hoveredOption === channel && styles.hoveredOption,
//                 ]}
//                 onPressIn={() => setHoveredOption(channel)}
//                 onPressOut={() => setHoveredOption(null)}
//               >
//                 <Text
//                   style={{
//                     color: kTextBlackColor,
//                     fontSize: 25,
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {channel}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const CustomCheckbox = ({ checked, onPress, label }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
//       <FontAwesome5
//         name={checked ? 'check-square' : 'square'}
//         size={30}
//         color={checked ? kPrimaryColor : kTextLightColor}
//         style={{ ...styles.checkboxIcon, fontWeight: 'bold', borderColor: kPrimaryColor }}
//       />
//       <Text>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const FeeScreen = ({ navigation }) => {
//   const [feeData, setFeeData] = useState([]);
//   const [totalAmount, setTotalAmount] = useState('0.00');
//   const [agree, setAgree] = useState(false);
//   const [paymentChannel, setPaymentChannel] = useState('Select');
//   const [hoveredOption, setHoveredOption] = useState(null);
//   const apiUrl = 'http://192.168.127.39:8082/myapp/api'; 

//   const handleChannelChange = (value) => {
//     setPaymentChannel(value);
//   };

//   const fetchFeeData = async () => {
//     try {
//       const response = await axios.get(apiUrl +'/fees/view');
//       const feeData = response.data;
//       if (response.status === 200) {
//         setFeeData(feeData);
//         console.log(feeData);
        
//       } else {
//         console.error('Failed to fetch fees');
        
//       }
//       console.log(feeData);
//     } catch (error) {
//       if (error.response) {
//         // The request was made, but the server responded with a status code
//         console.error('Server responded with:', error.response.status);
//       } else if (error.request) {
//         // The request was made, but no response was received
//         console.error('No response received:', error.request);
//       } else {
//         // Something else happened while setting up the request
//         console.error('Error:', error.message);
//       }
//       // Handle the error as needed
//     }
//   };
  

//   useEffect(() => {
//     fetchFeeData();
//   }, []);

//   const handleCheckBoxChange = (itemId) => {
//     const updatedData = feeData.map((item) =>
//       item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      
//     );
//     console.log(item);

//     setFeeData(updatedData);
//     calculateTotalAmount(updatedData);
//   };

//   const calculateTotalAmount = (items) => {
//     const sum = items.reduce((accumulator, item) => {
//       if (item.isChecked) {
//         return accumulator + parseFloat(item.amount);
//       }
//       return accumulator;
//     }, 0);
//     setTotalAmount(sum.toFixed(2));
//   };

//   const handlePayment = () => {
//     if (!agree) {
//       Alert.alert('Please agree to the terms and conditions.');
//       return;
//     }

//     // Proceed with the payment logic.
//     // Add your payment logic here.
//   };

//   const paystackKey = "pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913";

//   const paystackWebViewRef = useRef(null);

//   const handlePaymentCancel = () => {
//     Alert.alert('Payment was canceled.');
//   };

//   const handlePaymentSuccess = (reference) => {
//     Alert.alert(`Payment was successful. Reference: ${reference}`);
//   };

//   const handlePaymentError = (error) => {
//     Alert.alert(`Payment failed. Error: ${error}`);
//   };

//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
//       <Header
//         leftComponent={
//           <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//             <Ionicons name="ios-arrow-back" size={35} color="#fff" />
//           </TouchableOpacity>
//         }
//         backgroundColor={kPrimaryColor}
//         centerComponent={{ text: '', style: styles.headerText }}
//       />
//       <ScrollView>
//         <View style={styles.paymentProfile}>
//           <Text style={styles.studentName}>Adewole  Adedeji</Text>
//           <Text style={styles.paymentMsg}>Kindly pay Your School Fees</Text>
//           <Text style={styles.longLine}></Text>
//         </View>
//         <View style={styles.contentContainer}>
//           <View style={styles.payMethodContainer}>
//             <Text style={styles.tabTitle}>Payment Method:</Text>
//             <CustomPicker
//               selectedValue={paymentChannel}
//               onValueChange={handleChannelChange}
//             />
//           </View>
//           <View style={styles.table}>
//             <View style={[styles.tableRow, styles.head]}>
//               <Text style={[styles.tableCell, styles.headText]}>Name</Text>
//               <Text style={[styles.tableCell, styles.headText]}>Amount</Text>
//             </View>
//             {feeData.map((fee) => (
              
//               <View key={fee.id} style={styles.tableRow}>
//                 <CustomCheckbox
//                   checked={fee.isChecked}
//                   onPress={() => {
//                     handleCheckBoxChange(fee.id);
//                   }}
//                 />
//                 <Text style={styles.tableCell}>{fee.name}</Text>
//                 <Text style={styles.tableCell}>₦{fee.amount}</Text>
//               </View>
//             ))}
//           </View>
//           <View style={styles.totalRow}>
//             <Text style={styles.totalText}>Total Amount:</Text>
//             <View style={styles.totalAmount}>
//               <Text style={styles.totalAmountText}>₦{totalAmount}</Text>
//             </View>
//           </View>
//           <View style={styles.termsContainer}>
//             <CustomCheckbox
//               checked={agree}
//               onPress={() => setAgree(!agree)}
//               label="I agree to the Terms and Conditions"
//             />
//           </View>
//           <TouchableOpacity
//             style={[styles.payButton, { opacity: totalAmount === '0.00' || !agree ? 0.5 : 1 }]}
//             disabled={totalAmount === '0.00' || !agree}
//             onPress={() => {
//               paystackWebViewRef.current.startTransaction();
//             }}
//           >
//             <Text style={styles.payButtonText}>Make Payment</Text>
//           </TouchableOpacity>
//           <Paystack
//             ref={paystackWebViewRef}
//             paystackKey={paystackKey}
//             amount={parseFloat(totalAmount)}
//             billingEmail="example@example.com"
//             billingName="John Doe"
//             billingPhoneNumber="08012345678"
//             refNumber={new Date().getTime().toString()}
//             onCancel={handlePaymentCancel}
//             onSuccess={handlePaymentSuccess}
//             onError={handlePaymentError}
//             autoStart={false}
//             style={styles.loadingIndicator}
//             ButtonText="Pay Now"
//             showPayButton={false}
//             showPayOption={false}
//             channels={['card', 'bank', 'ussd']}
//             currency="NGN"
//             activityIndicatorColor="green"
//             SafeAreaViewContainer={{ marginTop: 25 }}
//             SafeAreaViewContainerModal={{ marginTop: 25 }}
//           />
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };


import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Paystack } from 'react-native-paystack-webview';
import { Header } from 'react-native-elements';
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
import axios from 'axios'; // Import axios for making HTTP requests

const kPrimaryColor = '#253D84';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';
const kTextLightColor = '#A5A5A5';

const CustomPicker = ({ selectedValue, onValueChange }) => {
  const paymentChannels = ['card', 'bank', 'ussd'];
  const [modalVisible, setModalVisible] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.dropdownContainer}
      >
        <Text style={styles.dropdownText}>
          {selectedValue ? selectedValue : 'Select Payment Channel'}
        </Text>
        <FontAwesome5
          name="chevron-down"
          size={16}
          color={kTextBlackColor}
          style={styles.dropdownIcon}
        />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {paymentChannels.map((channel) => (
              <TouchableOpacity
                key={channel}
                onPress={() => {
                  onValueChange(channel);
                  setModalVisible(false);
                }}
                style={[
                  styles.modalOption,
                  hoveredOption === channel && styles.hoveredOption,
                ]}
                onPressIn={() => setHoveredOption(channel)}
                onPressOut={() => setHoveredOption(null)}
              >
                <Text
                  style={{
                    color: kTextBlackColor,
                    fontSize: 25,
                    fontWeight: 'bold',
                  }}
                >
                  {channel}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const CustomCheckbox = ({ checked, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
      <FontAwesome5
        name={checked ? 'check-square' : 'square'}
        size={30}
        color={checked ? kPrimaryColor : kTextLightColor}
        style={{ ...styles.checkboxIcon, fontWeight: 'bold', borderColor: kPrimaryColor }}
      />
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const FeeScreen = ({ navigation }) => {
  const [feeData, setFeeData] = useState([]);
  const [totalAmount, setTotalAmount] = useState('0.00');
  const [agree, setAgree] = useState(false);
  const [paymentChannel, setPaymentChannel] = useState('Select');
  const [hoveredOption, setHoveredOption] = useState(null);
  const apiUrl = 'http://192.168.212.39:8082/myapp/api'; 
  // const apiUrl = 'http://192.168.1.103:8082/myapp/api'; 

  const paymentData = {
    studentName: 'Moses Abiola',
    amount: 100.00,
    paymentChannel: 'Card',
    agreedToTerms: true,
  };
  

  const handleChannelChange = (value) => {
    setPaymentChannel(value);
  };

  const fetchFeeData = async () => {
    try {
      const response = await axios.get(apiUrl +'/fees/view');
      const feeData = response.data;
      if (response.status === 200) {
        setFeeData(feeData);
        console.log(feeData);
      } else {
        console.error('Failed to fetch fees');
      }
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with a status code
        console.error('Server responded with:', error.response.status);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something else happened while setting up the request
        console.error('Error:', error.message);
      }
      // Handle the error as needed
    }
  };
  
  useEffect(() => {
    fetchFeeData();
  }, []);

  const handleCheckBoxChange = (itemId) => {
    const updatedData = feeData.map((item) =>
      item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
    );
    setFeeData(updatedData);
    calculateTotalAmount(updatedData);
  };

  const calculateTotalAmount = (items) => {
    const sum = items.reduce((accumulator, item) => {
      if (item.isChecked) {
        return accumulator + parseFloat(item.amount);
      }
      return accumulator;
    }, 0);
    setTotalAmount(sum.toFixed(2));
  };

  const handlePayment = () => {
    if (!agree) {
      Alert.alert('Please agree to the terms and conditions.');
      return;
    }

    // Proceed with the payment logic.
    // Add your payment logic here.
  };

  const paystackKey = "pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913";

  const paystackWebViewRef = useRef(null);

  const handlePaymentCancel = () => {
    Alert.alert('Payment was canceled.');
  };

  // const handlePaymentSuccess = (reference) => {
  //   Alert.alert(`Payment was successful. Reference: ${reference}`);
  // };

  // const handlePaymentSuccess = async (reference) => {
  //   try {
  //     // Fetch the payment details based on the reference from your backend
  //     const response = await axios.get(`http://localhost:8082/myapp/api/fee-payments/create?reference=${reference}`);

  //     if (response.status === 200) {
  //       const paymentData = response.data;

  //       // Make a POST request to save the payment data to your backend
  //       const saveResponse = await axios.post('http://localhost:8082/myapp/api/fee-payments/create', paymentData);
  //       // const saveResponse = await axios.post(apiUrl + '/fee-payments/create', paymentData);

  //       if (saveResponse.status === 200) {
  //         Alert.alert(`Payment was successful. Reference: ${reference}`);
  //         // Make a POST request to save the payment data to your backend
  //       const saveResponse = await axios.post('http://localhost:8082/myapp/api/fee-payments/create', paymentData);
  //       // const saveResponse = await axios.post(apiUrl + '/fee-payments/create', paymentData);

  //       } else {
  //         Alert.alert('Failed to save payment details.');
  //         // Make a POST request to save the payment data to your backend
  //       const saveResponse = await axios.post('http://localhost:8082/myapp/api/fee-payments/create', paymentData);
  //       // const saveResponse = await axios.post(apiUrl + '/fee-payments/create', paymentData);

  //       }
  //     } else {
  //       Alert.alert('Failed to fetch payment details.');
  //     }
  //   } catch (error) {
  //     console.error('Payment failed. Error:', error);
  //     Alert.alert('Payment failed. Please try again later.');
  //   }
  // };


  const handlePaymentSuccess = async (reference) => {
    try {
      // Fetch the payment details based on the reference from your backend
      const response = await axios.get(`${apiUrl}/fee-payments/create?reference=${reference}`);
  
      if (response.status === 200) {
        const paymentData = response.data;
  
        // Make a POST request to save the payment data to your backend
        const saveResponse = await axios.post(`${apiUrl}/fee-payments/create`, paymentData);
  
        if (saveResponse.status === 201) {
          Alert.alert(`Payment was successful. Reference: ${reference}`);
        } else {
          Alert.alert('Failed to save payment details.');
        }
      } else {
        Alert.alert('Failed to fetch payment details.');
      }
    } catch (error) {
      console.error('Payment failed. Error:', error);
      Alert.alert('Payment failed. Please try again later.');
    }
  };
  



  const handlePaymentError = (error) => {
    Alert.alert(`Payment failed. Error: ${error}`);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      {/* <Header
        leftComponent={
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="ios-arrow-back" size={35} color="#fff" />
          </TouchableOpacity>
        }
        backgroundColor={kPrimaryColor}
        centerComponent={{ text: '', style: styles.headerText }}
      /> */}
      <ScrollView>
        <View style={styles.paymentProfile}>
          <Text style={styles.studentName}>{paymentData.studentName}</Text>
          <Text style={styles.paymentMsg}>Kindly pay Your School Fees</Text>
          <Text style={styles.longLine}></Text>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.payMethodContainer}>
            <Text style={styles.tabTitle}>Payment Method:</Text>
            <CustomPicker
              selectedValue={paymentChannel}
              onValueChange={handleChannelChange}
            />
          </View>
          <View style={styles.table}>
            <View style={[styles.tableRow, styles.head]}>
              <Text style={[styles.tableCell, styles.headText]}>Name</Text>
              <Text style={[styles.tableCell, styles.headText]}>Amount</Text>
            </View>
            {feeData.map((fee) => (
              <View key={fee.id} style={styles.tableRow}>
                <CustomCheckbox
                  checked={fee.isChecked}
                  onPress={() => {
                    handleCheckBoxChange(fee.id);
                  }}
                  label={fee.name}
                />
                <Text style={styles.tableCell}>₦{fee.amount}</Text>
              </View>
            ))}
          </View>
          <View style={styles.totalRow}>
            <Text style={styles.totalText}>Total Amount:</Text>
            <View style={styles.totalAmount}>
              <Text style={styles.totalAmountText}>₦{totalAmount}</Text>
            </View>
          </View>
          <View style={styles.termsContainer}>
            <CustomCheckbox
              checked={agree}
              onPress={() => setAgree(!agree)}
              label="I agree to the Terms and Conditions"
            />
          </View>
          <TouchableOpacity
            style={[styles.payButton, { opacity: totalAmount === '0.00' || !agree ? 0.5 : 1 }]}
            disabled={totalAmount === '0.00' || !agree}
            onPress={() => {
              paystackWebViewRef.current.startTransaction();
            }}
          >
            <Text style={styles.payButtonText}>Make Payment</Text>
          </TouchableOpacity>
          <Paystack
            ref={paystackWebViewRef}
            paystackKey={paystackKey}
            amount={parseFloat(totalAmount)}
            billingEmail="example@example.com"
            billingName="John Doe"
            billingPhoneNumber="08012345678"
            refNumber={new Date().getTime().toString()}
            onCancel={handlePaymentCancel}
            onSuccess={handlePaymentSuccess}
            onError={handlePaymentError}
            autoStart={false}
            style={styles.loadingIndicator}
            ButtonText="Pay Now"
            showPayButton={false}
            showPayOption={false}
            channels={['card', 'bank', 'ussd']}
            currency="NGN"
            activityIndicatorColor="green"
            SafeAreaViewContainer={{ marginTop: 25 }}
            SafeAreaViewContainerModal={{ marginTop: 25 }}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: kPrimaryColor,
  },
  contentContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
       width:'100%'
  },
  paymentProfile: {
    backgroundColor: kPrimaryColor,
    padding: 20,
    // flex:1,
    // borderRadius: 10,
    // borderWidth: 1,
    borderColor: '#ccc',
    // margin: 10,
  },
  studentName: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF', 
    textAlign: 'center', 
  },
  paymentMsg: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
    textAlign: 'center', 
  },
  longLine: {
    borderBottomWidth: 5,
    borderBottomColor: '#FFF',
  },
  table: {
    marginTop: 10,
    borderColor:kPrimaryColor,
    borderWidth: 2,
    padding: 1,
    borderRadius: 22,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 1,
    padding: 15,
    fontWeight: 'bold',
    fontSize:18,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    color:kTextBlackColor,
    fontWeight: 'bold',
    fontSize:18,
  },
  head: {
    height: 40,
    backgroundColor: '#00048D',
    padding: 28,
    borderRadius: 15,
    fontSize:20,
  },
  headText: {
    fontWeight: 'bold',
    fontSize:18,
    textAlign: 'center',
    color: '#FFF',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    borderTopWidth: 1,
    paddingTop: 8,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize:18,
  },
  totalAmount: {
    borderColor:kPrimaryColor,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 50,
    paddingVertical: 10,
   
  },
  totalAmountText: {
    fontWeight: 'bold',
    fontSize:18,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  termsText: {
    marginLeft: 8,
    fontWeight: 'bold',
    fontSize:16,
  },
  payButton: {
    backgroundColor:kPrimaryColor,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 16,
  },
  payButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize:20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    width: 25,
    height: 22,
    borderWidth: 4,
    borderColor: kTextLightColor,
    marginRight: 10,
  },
  checked: {
    backgroundColor:kPrimaryColor,
    
  },
  checkboxIcon: {
    marginRight: 10, // Add some spacing between the icon and label
  },
  // Custom Picker Styles
  dropdownContainer: {
    backgroundColor:kTextLightColor,
    color:kPrimaryColor,
    borderColor: '#ddd',
    borderWidth: 3,
    borderRadius: 15,
    padding: 5,
    marginTop: 1,
    margingHorizontal:20,

  },
  dropdownText: {
    fontSize: 16,
    paddingHorizontal: 40,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    
  },
  dropdownIcon: {
    position: 'absolute',
    top: 14, 
    right: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  modalContent: {
    backgroundColor:'#FCFCF0',
    padding: 20,
    borderRadius: 8,
    paddingVertical: 20,
  },
  modalOption: {
    paddingVertical: 20,
    paddingHorizontal:60,
    color:kPrimaryColor,
  },
  hoveredOption: {
    backgroundColor: kPrimaryColor, 
},

  tabTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  payMethodContainer: {
    marginVertical: 16,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
    marginVertical: 50,
  },
  headerText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  
});



export default FeeScreen;


// import React, { useState, useRef } from 'react';
// import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal,
//   KeyboardAvoidingView,
//   ScrollView, 

// } from 'react-native';
// import { Paystack } from 'react-native-paystack-webview'; // Import Paystack component
// import { Header } from 'react-native-elements';
// import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'; // Import Font Awesome icons

// // import { constant } from './src/constant/constant'

// const kPrimaryColor = '#253D84';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kTextLightColor = '#A5A5A5';




// const CustomPicker = ({ selectedValue, onValueChange }) => {
//   const paymentChannels = ['card', 'bank', 'ussd'];
//   const [modalVisible, setModalVisible] = useState(false);
//   const [hoveredOption, setHoveredOption] = useState(null);

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => setModalVisible(true)}
//         style={styles.dropdownContainer}
//       >
//         <Text style={styles.dropdownText}>
//           {selectedValue ? selectedValue : 'Select Payment Channel'}
//         </Text>
//         <FontAwesome5
//           name="chevron-down"
//           size={16}
//           color={kTextBlackColor}
//           style={styles.dropdownIcon}
//         />
//       </TouchableOpacity>

//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalContainer}>
//           <View style={styles.modalContent}>
//             {paymentChannels.map((channel) => (
//               <TouchableOpacity
//                 key={channel}
//                 onPress={() => {
//                   onValueChange(channel);
//                   setModalVisible(false);
//                 }}
//                 style={[
//                   styles.modalOption,
//                   hoveredOption === channel && styles.hoveredOption,
//                 ]}
//                 onPressIn={() => setHoveredOption(channel)}
//                 onPressOut={() => setHoveredOption(null)}
//               >
//                 <Text
//                   style={{
//                     color: kTextBlackColor,
//                     fontSize: 25,
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {channel}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };


// const CustomCheckbox = ({ checked, onPress, label }) => {
//   return (
//     <TouchableOpacity onPress={onPress} style={styles.checkboxContainer}>
//       <FontAwesome5
//         name={checked ? 'check-square' : 'square'}
//         size={30}
//         color={checked ? kPrimaryColor : kTextLightColor}
//         style={{...styles.checkboxIcon, fontWeight:'bold',borderColor:kPrimaryColor,
   
//       }}
//       />
//       <Text>{label}</Text>
//     </TouchableOpacity>
//   );
// };

// const FeeScreen = (navigation) => {


//   const [data, setData] = useState([
//     { id: 1, name: 'school fees', amount: `30000`, isChecked: false },
//     { id: 2, name: 'School Uniform', amount: 15000, isChecked: false },
//     { id: 3, name: 'text books', amount: 20000, isChecked: false },
//     { id: 4, name: 'sport wear', amount: 10000, isChecked: false },
//     { id: 5, name: 'Excusion', amount: 25000, isChecked: false },
//     // Add more items as needed
//   ]);

//   // const [totalAmount, setTotalAmount] = useState(0);
//   const [totalAmount, setTotalAmount] = useState('0.00'); // Initialize as a string
//   const [agree, setAgree] = useState(false);
//   const [paymentChannel, setPaymentChannel] = useState('Select'); // Initialize the payment channel
//   const [hoveredOption, setHoveredOption] = useState(null);

//   const handleChannelChange = (value) => {
//     setPaymentChannel(value);
//   };

//   const handleCheckBoxChange = (itemId) => {
//     const updatedData = data.map((item) =>
//       item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
//     );
//     setData(updatedData);
//     calculateTotalAmount(updatedData);
//   };


//   const calculateTotalAmount = (items) => {
//     const sum = items.reduce((accumulator, item) => {
//       if (item.isChecked) {
//         return accumulator + parseFloat(item.amount); // Parse as a float
//       }
//       return accumulator;
//     }, 0);
//     setTotalAmount(sum.toFixed(2)); // Format as a string with two decimal places
//   };

//   const handlePayment = () => {
//     if (!agree) {
//       // Show an alert or handle the case where the user hasn't agreed to the terms.
//       Alert.alert('Please agree to the terms and conditions.');
//       return;
//     }

//     // Proceed with the payment logic.
//     // Add your payment logic here.
//   };

//   // Add your Paystack key here
//   const paystackKey = "pk_test_b3950366e577a3bdbd3a9c7cb88622449de37913";

//   // Create a ref for Paystack component
//   const paystackWebViewRef = useRef(null);

//   // Handle payment cancellation
//   const handlePaymentCancel = () => {
//     Alert.alert('Payment was canceled.');
//     // Additional handling if needed
//   };

//   const handlePaymentSuccess = (reference) => {
//     Alert.alert(`Payment was successful. Reference: ${reference}`);
//     // Additional handling if needed
//   };

//   const handlePaymentError = (error) => {
//     Alert.alert(`Payment failed. Error: ${error}`);
//     // Additional handling if needed
//   };


//   return (
//     <KeyboardAvoidingView style={styles.container} behavior="padding">
// <ScrollView>
//     <View style={styles.paymentProfile}>
//       <Text style={styles.studentName}>Adewole  Adedeji</Text>
//       <Text style={styles.paymentMsg}>Kindly pay Your School Fees</Text>
//       <Text style={styles.longLine}></Text>
//     </View>
    
//       <View style={styles.contentContainer}>
//       <View style={styles.payMethodContainer}>
//         <Text style={styles.tabTitle}>Payment Method:</Text>
//         <CustomPicker
//           selectedValue={paymentChannel}
//           onValueChange={handleChannelChange}
//         />
//       </View>

//       <View style={styles.table}>
//         <View style={[styles.tableRow, styles.head]}>
//           <Text style={[styles.tableCell, styles.headText]}>Name</Text>
//           <Text style={[styles.tableCell, styles.headText]}>Amount</Text>
//         </View>

//         {data.map((item) => (
//           <View key={item.id} style={styles.tableRow}>
//             <CustomCheckbox
//               checked={item.isChecked}
//               onPress={() => {
//                 handleCheckBoxChange(item.id);
//               }}
//               // label={item.name}
//             />
//             <Text style={styles.tableCell}>{item.name}</Text>
//             <Text style={styles.tableCell}>₦{item.amount}</Text>
//           </View>
//         ))}
//       </View>
//       <View style={styles.totalRow}>
//         <Text style={styles.totalText}>Total Amount:</Text>
//         <View style={styles.totalAmount}>
//           <Text style={styles.totalAmountText}>₦{totalAmount}</Text>
//         </View>
//       </View>

//       <View style={styles.termsContainer}>
//         <CustomCheckbox
//           checked={agree}
//           onPress={() => setAgree(!agree)}
//           label="I agree to the Terms and Conditions"
//         />
//       </View>

//       <TouchableOpacity
//         style={[styles.payButton, { opacity: totalAmount === 0 || !agree ? 0.5 : 1 }]}
//         disabled={totalAmount === 0 || !agree}
//         onPress={() => {
//           // Trigger the Paystack payment using the ref
//           paystackWebViewRef.current.startTransaction();
//         }}
//       >
//         <Text style={styles.payButtonText}>Make Payment</Text>
//       </TouchableOpacity>

//       {/* Paystack component */}
//       <Paystack
//         ref={paystackWebViewRef}
//         paystackKey={paystackKey}
//         // amount={totalAmount.toFixed(2)}
//         amount={parseFloat(totalAmount)} // Convert it back to a float
//         billingEmail="example@example.com"
//         billingName="John Doe"
//         billingPhoneNumber="08012345678"
//         refNumber={new Date().getTime().toString()}
//         onCancel={handlePaymentCancel}
//         onSuccess={handlePaymentSuccess}
//         onError={handlePaymentError}
//         autoStart={false}
//         style={styles.loadingIndicator}
//         ButtonText="Pay Now"
//         showPayButton={false}
//         showPayOption={false}
//         channels={['card', 'bank', 'ussd']}
//         currency="NGN"
//         activityIndicatorColor="green"
//         SafeAreaViewContainer={{ marginTop: 25 }}
//         SafeAreaViewContainerModal={{ marginTop: 25 }}
//       />
//     </View>
//     {/* </View> */}

// </ScrollView>
// </KeyboardAvoidingView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 1,
//     backgroundColor: kPrimaryColor,
//   },
//   contentContainer: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f8f8f8',
//     width:'100%'
//   },
//   paymentProfile: {
//     backgroundColor: kPrimaryColor,
//     padding: 10,
//     // flex:1,
//     // borderRadius: 10,
//     // borderWidth: 1,
//     borderColor: '#ccc',
//     // margin: 10,
//   },
//   studentName: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//     color: '#FFF', 
//     textAlign: 'center', 
//   },
//   paymentMsg: {
//     fontSize: 14,
//     fontWeight: 'bold',
//     color: '#FFF',
//     marginBottom: 5,
//     textAlign: 'center', 
//   },
//   longLine: {
//     borderBottomWidth: 2,
//     borderBottomColor: '#FFF',
//   },
//   table: {
//     marginTop: 5,
//     borderColor:kPrimaryColor,
//     borderWidth: 2,
//     padding: 1,
//     borderRadius: 22,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingVertical: 1,
//     borderWidth: 2,
//     borderColor: '#ddd',
//     borderRadius: 1,
//     padding: 10,
//     fontWeight: 'bold',
//     fontSize:18,
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'center',
//     color:kTextBlackColor,
//     fontWeight: 'bold',
//     fontSize:18,
//   },
//   head: {
//     height: 40,
//     backgroundColor: '#253D84',
//     padding: 28,
//     borderRadius: 15,
//     fontSize:20,
//   },
//   headText: {
//     fontWeight: 'bold',
//     fontSize:18,
//     textAlign: 'center',
//     color: '#FFF',
//   },
//   totalRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 16,
//     borderTopWidth: 1,
//     paddingTop: 8,
//   },
//   totalText: {
//     fontWeight: 'bold',
//     fontSize:18,
//   },
//   totalAmount: {
//     borderColor:kPrimaryColor,
//     borderWidth: 2,
//     borderRadius: 8,
//     paddingHorizontal: 50,
//     paddingVertical: 10,
   
//   },
//   totalAmountText: {
//     fontWeight: 'bold',
//     fontSize:18,
//   },
//   termsContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 8,
//   },
//   termsText: {
//     marginLeft: 8,
//     fontWeight: 'bold',
//     fontSize:16,
//   },
//   payButton: {
//     backgroundColor:kPrimaryColor,
//     paddingVertical: 20,
//     alignItems: 'center',
//     borderRadius: 10,
//     marginTop: 16,
//   },
//   payButtonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     fontSize:20,
//   },
//   checkboxContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 16,
//   },
//   checkbox: {
//     width: 25,
//     height: 22,
//     borderWidth: 4,
//     borderColor: kTextLightColor,
//     marginRight: 10,
//   },
//   checked: {
//     backgroundColor:kPrimaryColor,
    
//   },
//   checkboxIcon: {
//     marginRight: 10, // Add some spacing between the icon and label
//   },
//   // Custom Picker Styles
//   dropdownContainer: {
//     backgroundColor:kPrimaryColor,
//     color:kPrimaryColor,
//     borderColor: '#ddd',
//     borderWidth: 3,
//     borderRadius: 15,
//     padding: 5,
//     marginTop: 1,
//     margingHorizontal:20,

//   },
//   dropdownText: {
//     fontSize: 16,
//     paddingHorizontal: 40,
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//     color:'#FFF'
    
//   },
//   dropdownIcon: {
//     position: 'absolute',
//     top: 14, 
//     right: 16,
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     paddingHorizontal: 40,
//     paddingVertical: 20,
//   },
//   modalContent: {
//     backgroundColor:'#FCFCF0',
//     padding: 20,
//     borderRadius: 8,
//     paddingVertical: 20,
//   },
//   modalOption: {
//     paddingVertical: 20,
//     paddingHorizontal:60,
//     color:kPrimaryColor,
//   },
//   hoveredOption: {
//     backgroundColor: kPrimaryColor, 
// },

//   tabTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   payMethodContainer: {
//     marginVertical: 16,
//     alignContent: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignSelf: 'stretch',
//     marginVertical: 50,
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//   },
  
// });

// export default FeeScreen;



