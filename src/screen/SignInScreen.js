import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import { AuthContext } from './AuthContext';

const kPrimaryColor = '#253D84';
const kSecondaryColor = '#6789CA';
const kTextBlackColor = '#313131';
const kTextWhiteColor = '#FFFFFF';

// const SignInScreen = ({ navigation }) => {
//   const { state, signIn, signUp } = useContext(AuthContext);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const validateEmail = () => {
//     if (email.trim() === '') {
//       setEmailError('Email is required');
//     } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
//       setEmailError('Invalid email address');
//     } else {
//       setEmailError('');
//     }
//   };

//   const validatePassword = () => {
//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//     } else if (password.length < 6) {
//       setPasswordError('Password should be at least 6 characters');
//     } else {
//       setPasswordError('');
//     }
//   };

// //   const handleLogin = () => {
// //     validateEmail();
// //     validatePassword();

// //     if (emailError === '' && passwordError === '') {
// //       setIsLoading(true); // Show loading indicator
// //     signIn(email, password)
// //   .then(() => {
// //     setEmail('');
// //     setPassword('');
// //     setIsLoading(false); // Hide loading indicator on success
// //     navigation.dispatch(
// //       CommonActions.navigate({
// //         name: 'App',
// //       })
// //     );
// //   })
// //   .catch((error) => {
// //     console.error('Sign in error:', error);
// //     setIsLoading(false); // Hide loading indicator on error
// //   });
// // }

// //   };

// const handleLogin = () => {
//   validateEmail();
//   validatePassword();

//   if (emailError === '' && passwordError === '') {
//     setIsLoading(true); // Show loading indicator
//     signIn(email, password)
//       .then(() => {
//         setEmail('');
//         setPassword('');
//         setIsLoading(false); // Hide loading indicator on success
//         navigation.dispatch(
//           CommonActions.reset({
//             index: 0,
//             routes: [{ name: 'HomeScreen' }], // Reset the stack to HomeScreen
//           })
//         );
//       })
//       .catch((error) => {
//         console.error('Sign in error:', error);
//         setIsLoading(false); // Hide loading indicator on error
//       });
//   }
// };

const SignInScreen = ({ navigation }) => {
  const { state, signIn, signUp } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = () => {
    if (email.trim() === '') {
      setEmailError('Email is required');
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = () => {
    if (password.trim() === '') {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password should be at least 6 characters');
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    validateEmail();
    validatePassword();

    if (emailError === '' && passwordError === '') {
      setIsLoading(true); // Show loading indicator

      // Simulate a successful login for demonstration purposes
      setTimeout(() => {
        setIsLoading(false); // Hide loading indicator on success
        signIn(email, password); // Call your signIn function from AuthContext
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }], // Replace 'Home' with the name of your Home screen
        });
      }, 2000); // Simulated delay, replace with your actual login logic
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
          <View style={styles.logoContainer}>
            <Image
              source={require('./../../assets/images/school-children-svg.jpg')}
              style={styles.logo}
            />
            <Text style={styles.title}>Hi Student</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.label}>Mobile Number/Email</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5 name="user-graduate" size={20} color={kTextBlackColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                onBlur={validateEmail}
                keyboardType="email-address"
              />
              {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
            </View>

            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <FontAwesome5 name="lock" size={20} color={kTextBlackColor} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={!passwordVisible}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
                <FontAwesome5
                  name={passwordVisible ? 'eye-slash' : 'eye'}
                  style={styles.togglePasswordIcon}
                />
              </TouchableOpacity>
              {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
            </View>
            <Text style={styles.togglePasswordText} onPress={togglePasswordVisibility}>
              {passwordVisible ? 'Hide Password' : 'Show Password'}
            </Text>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              {isLoading ? (
                <ActivityIndicator size="small" color="gray" />
              ) : (
                <Text style={styles.loginButtonText}>
                  SIGN IN <FontAwesome name="arrow-right" style={styles.icon} />
                </Text>
              )}
            </TouchableOpacity>
            <Text style={styles.forgotPassword} onPress={() => {}}>
              Forgot Password
            </Text>
            <View style={styles.signupContainer}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
                <Text style={styles.loginLink}> SignUp</Text>
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
    marginTop: 29,
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
    marginTop: 40,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
    color: kTextWhiteColor,
  },
  subtitle: {
    fontSize: 16,
    color: kTextWhiteColor,
    marginBottom: 20,
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
  loginButton: {
    backgroundColor: kSecondaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: kTextWhiteColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    textAlign: 'center',
    color: kTextBlackColor,
    marginTop: 10,
  },
  icon: {
    marginRight: 5,
    color: kPrimaryColor,
    fontWeight: 'bold',
    fontSize: 25,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 17,
    marginBottom: 20,
  },
  loginText: {
    color: kPrimaryColor,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginLink: {
    fontWeight: 'bold',
    color: '#877dfa',
    
  },
});

export default SignInScreen;


// import React, { useState, useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   KeyboardAvoidingView,
//   ScrollView, 
//   SafeAreaView,
// } from 'react-native';
// import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
// import { CommonActions } from '@react-navigation/native';
// import { AuthContext } from './AuthContext';

// const kPrimaryColor = '#000050';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';

// const SignInScreen = ({ navigation }) => {
//   const { state, signIn, signUp } = useContext(AuthContext);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async () => {
//     // Perform login logic here, validate email and password
//     if (email && password.length >= 5) {
//       try {
//         // Perform sign-in logic and navigate if successful
//         await signIn(email, password);
//         setEmail('');
//         setPassword('');
//         navigation.dispatch(
//           CommonActions.navigate({
//             name: 'App',
//           })
//         );
//       } catch (error) {
//         console.log('Sign in error:', error);
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//       style={styles.keyboardAvoidingContainer}
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       <ScrollView contentContainerStyle={styles.scrollView}>
//         <View style={styles.logoContainer}>
//           <Image
//             source={require('./../../assets/images/school-children-svg.jpg')}
//             style={styles.logo}
//           />
//           <Text style={styles.title}>Hi Student</Text>
//           <Text style={styles.subtitle}>Sign in to continue</Text>
//         </View>

//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Mobile Number/Email</Text>
//           <View style={styles.inputContainer}>
//             <FontAwesome5
//               name="user-graduate"
//               size={20}
//               color={kTextBlackColor}
//               style={styles.icon}
//             />
//             <TextInput
//               style={styles.input}
//               placeholder="Mobile Number/Email"
//               value={email}
//               onChangeText={(text) => setEmail(text)}
//               keyboardType="email-address"
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

//           <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//             <Text style={styles.loginButtonText}>
//               SIGN IN{' '}
//               <FontAwesome name="arrow-right" style={styles.icon} />
//             </Text>
//           </TouchableOpacity>
//           <Text style={styles.forgotPassword} onPress={() => {}}>
//             Forgot Password
//           </Text>
//         <View style={styles.signupContainer}>
//           <Text style={styles.loginText}>Already have an account?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//             <Text style={styles.loginLink}> SignUp</Text>
//           </TouchableOpacity>
//         </View>
//         </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: kPrimaryColor,

//   // },
//   // scrollViewContent: {
//   //   flexGrow: 1,
//   //   justifyContent: 'center',
//   // },
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//     marginTop:29
//   },
//   keyboardAvoidingContainer: {
//     flex: 1,
//   },
//   scrollView: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   logoContainer: {
//     alignItems: 'center',
//     marginTop:40,
//   },
//   title: {
//     fontSize: 44,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: kTextWhiteColor,
//     marginBottom: 20,
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
//   loginButton: {
//     backgroundColor: kSecondaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     textAlign: 'center',
//     color: kTextBlackColor,
//     marginTop: 10,
//   },
//   icon: {
//     marginRight: 5,
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 25,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop:17,
//     marginBottom: 20,
//   },
//   loginText: {
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   loginLink: {
//     fontWeight: 'bold',
//     color: '#877dfa',
//     fontWeight:20,
//   },
// });

// export default SignInScreen;



// import React, { useState, useContext } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
// } from 'react-native';
// import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
// import { CommonActions } from '@react-navigation/native';
// import { AuthContext } from './AuthContext';

// const kPrimaryColor = '#000050';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';

// const SignInScreen = ({ navigation }) => {
//   const { state, signIn, signUp } = useContext(AuthContext);

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async () => {
//     // Perform login logic here, validate email and password
//     if (email && password.length >= 5) {
//       try {
//         // Perform sign-in logic and navigate if successful
//         await signIn(email, password);
//         setEmail('');
//         setPassword('');
//         navigation.dispatch(
//           CommonActions.navigate({
//             name: 'App',
//           })
//         );
//       } catch (error) {
//         console.log('Sign in error:', error);
//       }
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('./../../assets/images/school-children-svg.jpg')}
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Hi Student</Text>
//         <Text style={styles.subtitle}>Sign in to continue</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Mobile Number/Email</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="user-graduate" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number/Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
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

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>
//              SIGN IN{' '}
//              <FontAwesome name="arrow-right" style={styles.icon} /> 
//           </Text>
//         </TouchableOpacity>
//         <Text style={styles.forgotPassword} onPress={() => {}}>
//           Forgot Password
//         </Text>
//       </View>
//       <View style={styles.loginContainer}>
//           <Text style={styles.loginText}>Already have an account?</Text>
//           <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//             <Text style={styles.loginLink}> Login</Text>
//           </TouchableOpacity>
//         </View>
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
//     fontSize: 44,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: kTextWhiteColor,
//     marginBottom: 20,
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
//   loginButton: {
//     backgroundColor: kSecondaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     textAlign: 'center',
//     color: kTextBlackColor,
//     marginTop: 10,
//   },
//   icon: {
//     marginRight: 5,
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 25,
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   loginContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 7,
//     marginBottom: 20,
//   },
//   loginText: {
//     color:kPrimaryColor,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   loginLink: {
//     fontWeight: 'bold',
//     color: '#877dfa',
//   },
// });

// export default SignInScreen;


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
// const kContainerColor = '#777777';
// const kTextLightColor = '#A5A5A5';

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = () => {
//     // Perform login logic here, validate email and password
//     if (email && password.length >= 5) {
//       // If validation passes, navigate to the Home screen
//       navigation.navigate('Home');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.logoContainer}>
//         <Image
//           source={require('./../../assets/images/school-children-svg.jpg')}
//           style={styles.logo}
//         />
//         <Text style={styles.title}>Hi Student</Text>
//         <Text style={styles.subtitle}>Sign in to continue</Text>
//       </View>

//       <View style={styles.formContainer}>
//         <Text style={styles.label}>Mobile Number/Email</Text>
//         <View style={styles.inputContainer}>
//           <FontAwesome5 name="user-graduate" size={20} color={kTextBlackColor} style={styles.icon} />
//           <TextInput
//             style={styles.input}
//             placeholder="Mobile Number/Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
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

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>
//              SIGN IN
//             <FontAwesome name="arrow-right" style={{...styles.icon, marginLeft:20}} /> 
//           </Text>
//         </TouchableOpacity>
//         <Text style={styles.forgotPassword} onPress={() => {}}>
//           Forgot Password
//         </Text>
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
//     fontSize: 44,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: kTextWhiteColor,
//     marginBottom: 20,
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     marginBottom: 20,
//     borderRadius: 75,
//   },
//   formContainer: {
//     backgroundColor:kTextWhiteColor,
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     paddingHorizontal: 20,
//     paddingTop: 20,
//     paddingBottom: 140,
//     width: '100%',
//     paddingHorizontal:20,
    
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
//     fontWeight:'bold',
//     fontSize:20,
//   },
//   togglePasswordText: {
//     color: kPrimaryColor,
//     alignSelf: 'flex-end',
//     marginBottom: 10,
//     fontWeight:'bold'
//   },
//   loginButton: {
//     backgroundColor: kSecondaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   loginButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     textAlign: 'center',
//     color: kTextBlackColor,
//     marginTop: 10,
//   },
//   icon: {
//     marginRight: 5,
//     color: kPrimaryColor,
//     fontWeight:'bold',
//     fontSize:25,
//   },
// });

// export default SignInScreen;






// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   ScrollView,
//   Icon,
// } from 'react-native';

// import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; // Import Font Awesome icons



// const kPrimaryColor = '#345FB4';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';
// const kContainerColor = '#777777';
// const kOtherColor = '#F4F6F7';
// const kTextLightColor = '#A5A5A5';
// const kErrorBorderColor = '#E74C3C';
// const kDefaultPadding = 20;

// const SignInScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(true);

//   const handleLogin = () => {
//     // Perform login logic here, validate email and password
//     if (email && password.length >= 5) {
//       // If validation passes, navigate to the Home screen
//       navigation.navigate('HomeScreen');
//     }
//   };

//   return (
//     <View style={[styles.container, { backgroundColor:kPrimaryColor }]}>
//           <View style={styles.logoContainer}>
//       <Image
//         source={require('./assets/images/school-children-svg.jpg')}
//         style={styles.logo}
//       />
//         <Text style={styles.title}>Hi Student</Text>
//         <Text style={styles.subtitle}>Sign in to continue</Text>
//       </View>

// <View style={styles.formContainer}>
//         <Text style={styles.label}>Mobile Number/Email</Text>
//         <View style={styles.inputContainer}>          <TextInput
//             style={styles.input}
//             placeholder="Mobile Number/Email"
//             value={email}
//             onChangeText={(text) => setEmail(text)}
//             keyboardType="email-address"
//           />
//           <Icon name="user-graduate" size={20} color="#333" /> {/* FontAwesome icon */}
//         </View>

//         <Text style={styles.label}>Password</Text>
//         <View style={styles.inputContainer}>
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={(text) => setPassword(text)}
//             secureTextEntry={passwordVisible}
//           />
//           <TouchableOpacity
//             onPress={() => setPasswordVisible(!passwordVisible)}
//             style={styles.iconContainer}
//           >
           
//              {/* <FontAwesome5 name="user" size={20} color="#333" /> FontAwesome icon */}
//              <FontAwesome5 name='lock' style={styles.togglePasswordIcon} /> SIGN IN

//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.loginButtonText}>
//           <FontAwesome5 name='arrow-right' style={styles.icon} /> SIGN IN
//           </Text>
//         </TouchableOpacity>
//         <Text
//           style={styles.forgotPassword}
//           onPress={() => {
//             // Handle forgot password logic here
//           }}
//         >
//           Forgot Password
//         </Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
 
//   },
    
//   logoContainer: {
//     alignItems: 'center',
//     marginTop:100,
//     borderRadius:50,
//   },
//   title: {
//     fontSize: 44,
//     fontWeight: 'bold',
//     color:'#fff',
//   },
//   subtitle: {
//     fontSize: 16,
//     color:'#fff',
//     marginBottom: 20,
//     fontWeight: 'bold',
//   },
//   logo: {
//     width: 150,
//     height: 150,
//     resizeMode: 'contain',
//     alignSelf: 'center',
//     marginBottom: 20,
//     borderRadius:100,
//   },
//   flexRowCenter: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   imageContainer: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   image: {
//     width: 200,
//     height: 200,
//     borderRadius: 100,
//   },
//   formContainer: {
//     backgroundColor:kContainerColor,
//     borderTopLeftRadius: 0,
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     paddingHorizontal: 34,
//     paddingTop: 20,
//     paddingVertical: 140,
//   },
//   label: {
//     color: '#00048D',
//     fontSize: 16,
//     marginBottom: 1,
//     marginLeft: 14,
//     fontWeight: 'bold',
//   },

//   input: {
//     borderBottomWidth: 2,   // Add this property to create a bottom border
//     borderBottomColor: '#333', // Color for the bottom border
//     marginBottom: 10,       // Adjusted margin for spacing
//     fontSize: 16,
//     paddingHorizontal: 0,  // Remove horizontal padding
//     paddingVertical: 5,    // Add vertical padding for spacing
//     color: '#333',         // Text color
//   },
//   togglePasswordButton: {
//     position: 'absolute',
//     right: 10,
//     top: 50,
//   },
//   togglePasswordIcon: {
//     width: 24,
//     height: 24,
//   },
//   loginButton: {
//     backgroundColor:kPrimaryColor,
//     paddingVertical: 25,
//     borderRadius: 25,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   loginButtonText: {
//     color: '#FFFFFF',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   forgotPassword: {
//     color:kPrimaryColor,
//     textAlign: 'right',
//     marginTop: 15,
//     fontWeight:'bold'
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconContainer: {
//     position: 'absolute',
//     right: 10,
//   },
//   icon: {
//     fontSize: 20,
//     color: '#333',
//   },
// });

// export default SignInScreen;
