import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import { AuthContext } from './AuthContext';

const kPrimaryColor = '#253D84';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';

const SignUpScreen = ({ navigation }) => {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const validateFields = () => {
    let isValid = true;

    if (!name) {
      setNameError('Full Name is required');
      isValid = false;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!phone) {
      setPhoneError('Phone number is required');
      isValid = false;
    } else {
      setPhoneError('');
    }

    if (!password || password.length < 5) {
      setPasswordError('Password should be at least 5 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSignUp = () => {
    if (validateFields()) {
      // Perform signup logic here, if validation passes
      signUp(name, email, phone, password).then(() => {
        // Navigate to the Home screen or another screen on successful signup
        navigation.navigate('HomeScreen');
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.logoContainer}>
            <Image
              source={require('./../../assets/images/students_profile.jpg')}
              style={styles.logo}
            />
            <Text style={styles.title}>Create an Account</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Full Name</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="user"
                size={20}
                color={kTextBlackColor}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Full Name"
                value={name}
                onChangeText={(text) => setName(text)}
              />
            </View>
            {nameError !== '' && <Text style={styles.errorText}>{nameError}</Text>}

            <Text style={styles.label}>Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="envelope"
                size={20}
                color={kTextBlackColor}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
              />
            </View>
            {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}

            <Text style={styles.label}>Phone</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="phone"
                size={20}
                color={kTextBlackColor}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                keyboardType="phone-pad"
              />
            </View>
            {phoneError !== '' && <Text style={styles.errorText}>{phoneError}</Text>}

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5
                name="lock"
                size={20}
                color={kTextBlackColor}
                style={styles.icon}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity
                onPress={togglePasswordVisibility}
                style={styles.iconContainer}
              >
                <FontAwesome5
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  style={styles.togglePasswordIcon}
                />
              </TouchableOpacity>
            </View>
            {passwordError !== '' && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )}

            <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
              <Text style={styles.signUpButtonText}>
                SIGN UP{' '}
                <FontAwesome name="arrow-right" style={styles.arrowIcon} />
              </Text>
            </TouchableOpacity>

            <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.loginLink}> Login</Text>
          </TouchableOpacity>
        </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: kPrimaryColor,
    paddingTop: 29,
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: kTextWhiteColor,
    marginTop: 10,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 75,
  },
  formContainer: {
    backgroundColor: kTextWhiteColor,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 140,
    width: '100%',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: kTextBlackColor,
    marginBottom: 20,
    paddingBottom: 5,
    fontSize: 16,
  },
  label: {
    color: kTextBlackColor,
    fontSize: 16,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    flex: 1,
    height: 40,
    color: kTextBlackColor,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',
    right: 0,
    padding: 10,
  },
  togglePasswordIcon: {
    color: kPrimaryColor,
    fontWeight: 'bold',
    fontSize: 20,
  },
  togglePasswordText: {
    color: kPrimaryColor,
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  signUpButton: {
    backgroundColor: kPrimaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  signUpButtonText: {
    color: kTextWhiteColor,
    fontSize: 20,
    fontWeight: 'bold',
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrowIcon: {
    marginRight: 5,
    color: kTextWhiteColor,
    fontSize: 22,
    paddingLeft: 20,
  },
  icon: {
    marginRight: 10,
    color: kTextBlackColor,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 7,
    marginBottom: 20,
  },
  loginText: {
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#877dfa',
  },
});

export default SignUpScreen;


// import React, { useState, useEffect, useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView, // Added ScrollView to handle scrolling if needed
// } from 'react-native';
// import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; // Import Font Awesome icons
// import { CommonActions, DrawerActions } from '@react-navigation/native';

// const kPrimaryColor = '#000050';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kTextLightColor = '#A5A5A5';

// const SignUpScreen = ({ navigation }) => {
//   const { state, signIn, signUp } = useContext(AuthContext);

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSignUp = () => {
//     // Perform signup logic here, validate name, email, phone, and password
//     if (name && email && phone && password.length >= 5) {
//       // If validation passes, navigate to the Home screen or another screen
//       navigation.navigate('HomeScreen');
//     }
//   };
  

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('./../../assets/images/students_profile.jpg')}
//             style={styles.logo}
//           />
//           <Text style={styles.title}>Create an Account</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Full Name</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome5
//               name="user"
//               size={20}
//               color={kTextBlackColor}
//               style={styles.icon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Full Name"
//               value={name}
//               onChangeText={(text) => setName(text)}
//             />
//           </View>

//           <Text style={styles.label}>Email</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome5
//               name="envelope"
//               size={20}
//               color={kTextBlackColor}
//               style={styles.icon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Email"
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               keyboardType="email-address"
//             />
//           </View>

//           <Text style={styles.label}>Phone</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome5
//               name="phone"
//               size={20}
//               color={kTextBlackColor}
//               style={styles.icon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Phone"
//               value={phone}
//               onChangeText={(text) => setPhone(text)}
//               keyboardType="phone-pad"
//             />
//           </View>

//           <Text style={styles.label}>Password</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome5
//               name="lock"
//               size={20}
//               color={kTextBlackColor}
//               style={styles.icon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Password"
//               value={password}
//               onChangeText={(text) => setPassword(text)}
//               secureTextEntry={!passwordVisible}
//             />
//             <TouchableOpacity
//               onPress={togglePasswordVisibility}
//               style={styles.iconContainer}
//             >
//               <FontAwesome5
//                 name={passwordVisible ? 'eye-slash' : 'eye'}
//                 style={styles.togglePasswordIcon}
//               />
//             </TouchableOpacity>
//           </View>
//           <Text
//             style={styles.togglePasswordText}
//             onPress={togglePasswordVisibility}
//           >
//             {passwordVisible ? 'Hide Password' : 'Show Password'}
//           </Text>

//           <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//             <Text style={styles.signUpButtonText}>
//               SIGN UP{' '}
//               <FontAwesome name="arrow-right" style={styles.arrowIcon} />
//             </Text>
//           </TouchableOpacity>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//     marginTop: 10,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     borderRadius: 75,
//   },
//   formContainer: {
//     backgroundColor: kTextWhiteColor,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 140,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: kTextBlackColor,
//     marginBottom: 20,
//     paddingBottom: 5,
//     fontSize: 16,
//   },
//   label: {
//     color: kTextBlackColor,
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     color: kTextBlackColor,
//     marginLeft: 10, 
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     position: 'absolute',
//     right: 0,
//     padding: 10,
//   },
//   togglePasswordIcon: {
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   togglePasswordText: {
//     color: kPrimaryColor,
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   signUpButton: {
//     backgroundColor: kPrimaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   signUpButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 20,
//     fontWeight: 'bold',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   arrowIcon: {
//     marginRight: 5,
//     color: kTextWhiteColor,
//     fontSize:22,
//     paddingLeft:20,
//   },
//   icon: {
//     marginRight: 10,
//     color: kTextBlackColor,
//   },
// });

// export default SignUpScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
// } from 'react-native';
// import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

// const kPrimaryColor = '#000050';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';

// const SignUpScreen = ({ navigation }) => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
    // parent: '',
    // username: '',
    // email: '',
    // studentName: '',
    // sex: '',
    // dob: '',
    // phone: '',
    // address: '',
    // state: '',
    // city: '',
    // relationship: '',
    // password: '',
    // confirmPassword: '',
//   });
  
//   // Define the passwordVisible state
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const nextStep = () => {
//     setStep(step + 1);
//   };

//   const prevStep = () => {
//     setStep(step - 1);
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSignUp = () => {
//     // Perform signup logic here, validate form data
//     // If validation passes, navigate to the Home screen or another screen
//     navigation.navigate('HomeScreen');
//   };

  
//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('./assets/images/school-children-svg.jpg')}
//             style={styles.logo}
//           />
//           <Text style={styles.title}>
//             {step === 1 ? 'Create an Account' : `Step ${step}`}
//           </Text>
//         </View>

//         <View style={styles.formContainer}>
//           {step === 1 && (
//             <>
//               <Text style={styles.label}>Parent</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="user"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Parent"
//                   value={formData.parent}
//                   onChangeText={(text) => setFormData({ ...formData, parent: text })}
//                 />
//               </View>

//               <Text style={styles.label}>Username</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="user"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Username"
//                   value={formData.username}
//                   onChangeText={(text) => setFormData({ ...formData, username: text })}
//                 />
//               </View>

//               <Text style={styles.label}>Email</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="envelope"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Email"
//                   value={formData.email}
//                   onChangeText={(text) => setFormData({ ...formData, email: text })}
//                   keyboardType="email-address"
//                 />
//               </View>

//               <Text style={styles.label}>Student Name</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="user"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Student Name"
//                   value={formData.studentName}
//                   onChangeText={(text) => setFormData({ ...formData, studentName: text })}
//                 />
//               </View>
//             </>
//           )}

//           {step === 2 && (
//             <>
//               <Text style={styles.label}>Sex</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="user"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Sex"
//                   value={formData.sex}
//                   onChangeText={(text) => setFormData({ ...formData, sex: text })}
//                 />
//               </View>

//               <Text style={styles.label}>Date of Birth (DOB)</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="calendar"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Date of Birth (DOB)"
//                   value={formData.dob}
//                   onChangeText={(text) => setFormData({ ...formData, dob: text })}
//                 />
//               </View>

//               <Text style={styles.label}>Phone</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="phone"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Phone"
//                   value={formData.phone}
//                   onChangeText={(text) => setFormData({ ...formData, phone: text })}
//                   keyboardType="phone-pad"
//                 />
//               </View>

//               <Text style={styles.label}>Address</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="map-marker-alt"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Address"
//                   value={formData.address}
//                   onChangeText={(text) => setFormData({ ...formData, address: text })}
//                 />
//               </View>
//             </>
//           )}

//           {step === 3 && (
//             <>
//               <Text style={styles.label}>State</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="map-marker-alt"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="State"
//                   value={formData.state}
//                   onChangeText={(text) => setFormData({ ...formData, state: text })}
//                 />
//               </View>

//               <Text style={styles.label}>City</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="map-marker-alt"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="City"
//                   value={formData.city}
//                   onChangeText={(text) => setFormData({ ...formData, city: text })}
//                 />
//               </View>

//               <Text style={styles.label}>Relationship</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="user-friends"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Relationship"
//                   value={formData.relationship}
//                   onChangeText={(text) => setFormData({ ...formData, relationship: text })}
//                 />
//               </View>
//             </>
//           )}

//           {step === 4 && (
//             <>
//               <Text style={styles.label}>Password</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="lock"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Password"
//                   value={formData.password}
//                   onChangeText={(text) => setFormData({ ...formData, password: text })}
//                   secureTextEntry={!passwordVisible}
//                 />
//                 <TouchableOpacity
//                   onPress={togglePasswordVisibility}
//                   style={styles.iconContainer}
//                 >
//                   <FontAwesome5
//                     name={passwordVisible ? 'eye-slash' : 'eye'}
//                     style={styles.togglePasswordIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <Text
//                 style={styles.togglePasswordText}
//                 onPress={togglePasswordVisibility}
//               >
//                 {passwordVisible ? 'Hide Password' : 'Show Password'}
//               </Text>

//               <Text style={styles.label}>Confirm Password</Text>
//               <View style={styles.inputContainer}>
//                 <FontAwesome5
//                   name="lock"
//                   size={20}
//                   color={kTextBlackColor}
//                   style={styles.icon}
//                 />
//                 <TextInput
//                   style={styles.input}
//                   placeholder="Confirm Password"
//                   value={formData.confirmPassword}
//                   onChangeText={(text) =>
//                     setFormData({ ...formData, confirmPassword: text })
//                   }
//                   secureTextEntry={!passwordVisible}
//                 />
//                 <TouchableOpacity
//                   onPress={togglePasswordVisibility}
//                   style={styles.iconContainer}
//                 >
//                   <FontAwesome5
//                     name={passwordVisible ? 'eye-slash' : 'eye'}
//                     style={styles.togglePasswordIcon}
//                   />
//                 </TouchableOpacity>
//               </View>
//               <Text
//                 style={styles.togglePasswordText}
//                 onPress={togglePasswordVisibility}
//               >
//                 {passwordVisible ? 'Hide Password' : 'Show Password'}
//               </Text>
//             </>
//           )}

//           <View style={styles.navigationButtons}>
//             {step > 1 && (
//               <TouchableOpacity style={styles.navButton} onPress={prevStep}>
//                 <FontAwesome5 name="chevron-left" style={styles.navButtonIcon} />
//               </TouchableOpacity>
//             )}

//             {step < 4 ? (
//               <TouchableOpacity style={styles.navButton} onPress={nextStep}>
//                 <FontAwesome5 name="chevron-right" style={styles.navButtonIcon} />
//               </TouchableOpacity>
//             ) : (
//               <TouchableOpacity style={styles.navButton} onPress={handleSignUp}>
//                 <Text style={styles.signUpButtonText}>
//                 SIGN UP{' '}
//                 <FontAwesome name="arrow-right" style={styles.arrowIcon} />
//               </Text>              
//             </TouchableOpacity>
//             )}
//           </View>
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//     marginTop: 10,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     borderRadius: 75,
//   },
//   formContainer: {
//     backgroundColor: kTextWhiteColor,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 140,
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: kTextBlackColor,
//     marginBottom: 20,
//     paddingBottom: 5,
//     fontSize: 16,
//   },
//   label: {
//     color: kTextBlackColor,
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     color: kTextBlackColor,
//     marginLeft: 10,
//     fontWeight: 'bold',
//   },
//   iconContainer: {
//     position: 'absolute',
//     right: 0,
//     padding: 10,
//   },
//   togglePasswordIcon: {
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   togglePasswordText: {
//     color: kPrimaryColor,
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   navigationButtons: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   navButton: {
//     backgroundColor: kPrimaryColor,
//     borderRadius: 50,
//     padding: 15,
//     alignItems: 'center',
//     width: 50,
//   },
//   navButtonIcon: {
//     color: kTextWhiteColor,
//     fontSize: 20,
//   },
// });

// export default SignUpScreen;



// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; // Import Font Awesome icons

// const kPrimaryColor = '#000050';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kTextLightColor = '#A5A5A5';

// const SignUpScreen = ({ navigation }) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleSignUp = () => {
//     // Perform signup logic here, validate name, email, phone, and password
//     if (name && email && phone && password.length >= 5) {
//       // If validation passes, navigate to the Home screen or another screen
//       navigation.navigate('HomeScreen');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('./assets/images/school-children-svg.jpg')}
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Create an Account</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Full Name</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="user" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Full Name"
//             value={name}
//             onChangeText={(text) => setName(text)}
//           />
//         </View>

//         <Text style={styles.label}>Email</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="envelope" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
//           />
//         </View>

//         <Text style={styles.label}>Phone</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="phone" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Phone"
//             value={phone}
//             onChangeText={(text) => setPhone(text)}
//             keyboardType="phone-pad"
//           />
//         </View>

//         <Text style={styles.label}>Password</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="lock" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={!passwordVisible}
//           />
//           <TouchableOpacity
//             onPress={togglePasswordVisibility}
//             style={styles.iconContainer}
//           >
//             <FontAwesome5
//               name={passwordVisible ? 'eye-slash' : 'eye'}
//               style={styles.togglePasswordIcon}
//             />
//           </TouchableOpacity>
//         </View>
//         <Text
//           style={styles.togglePasswordText}
//           onPress={togglePasswordVisibility}
//         >
//           {passwordVisible ? 'Hide Password' : 'Show Password'}
//         </Text>

//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//           <Text style={styles.signUpButtonText}>
//             SIGN UP{' '}
//             <FontAwesome name="arrow-right" style={styles.arrowIcon} />
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//     alignItems: 'center',
//     paddingTop: 50,
//   },
//   logoContainer: {
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//     marginTop: 10,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     borderRadius: 75,
//   },
//   formContainer: {
//     backgroundColor: kTextWhiteColor,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 140,
//     width: '100%',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderColor: kTextBlackColor,
//     marginBottom: 20,
//     paddingBottom: 5,
//   },
//   label: {
//     color: kTextBlackColor,
//     fontSize: 16,
//     marginBottom: 5,
//     fontWeight: 'bold',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     color: kTextBlackColor,
//     marginLeft: 10,
//   },
//   iconContainer: {
//     position: 'absolute',
//     right: 0,
//     padding: 10,
//   },
//   togglePasswordIcon: {
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   togglePasswordText: {
//     color: kPrimaryColor,
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//     fontWeight: 'bold',
//   },
//   signUpButton: {
//     backgroundColor: kSecondaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   signUpButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     fontWeight: 'bold',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   arrowIcon: {
//     marginRight: 5,
//     color: kTextWhiteColor,
//   },
//   icon: {
//     marginRight: 10,
//     color: kTextBlackColor,
//   },
// });

// export default SignUpScreen;
