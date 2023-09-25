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
//   ActivityIndicator,
// } from 'react-native';
// import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
// import { AuthContext } from './AuthContext'; // Import the AuthContext



// const kPrimaryColor = '#253D84';
// const kSecondaryColor = '#6789CA';
// const kTextBlackColor = '#313131';
// const kTextWhiteColor = '#FFFFFF';

// const SignInScreen = ({ navigation }) => {
//   const { signIn } = useContext(AuthContext); // Access the signIn function from the context

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

//   const handleLogin = async () => {
//     validateEmail();
//     validatePassword();

//     if (emailError === '' && passwordError === '') {
//       setIsLoading(true); // Show loading indicator

//       try {
//         // Call the signIn function from the context with email and password
//         await signIn(email, password);

//         // Navigate to the Home screen upon successful login
//         navigation.reset({
//           index: 0,
//           routes: [{ name: 'Home' }], // Replace 'Home' with the name of your Home screen
//         });
//       } catch (error) {
//         // Handle login errors, e.g., display an error message
//         console.error('Login error:', error);
//       } finally {
//         setIsLoading(false); // Hide loading indicator after login attempt
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <KeyboardAvoidingView
//         style={styles.keyboardAvoidingContainer}
//         behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//       >
//         <ScrollView contentContainerStyle={styles.scrollView} keyboardShouldPersistTaps="handled">
//           <View style={styles.logoContainer}>
//             <Image
//               source={require('./../../assets/images/school-logo.png')}
//               style={styles.logo}
//             />
//             <Text style={styles.title}>Hi Student</Text>
//             <Text style={styles.subtitle}>Sign in to continue</Text>
//           </View>

//           <View style={styles.formContainer}>
//             <Text style={styles.label}>Mobile Number/Email</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5 name="user-graduate" size={20} color={kTextBlackColor} style={styles.icon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 onBlur={validateEmail}
//                 keyboardType="email-address"
//               />
//               {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
//             </View>

//             <Text style={styles.label}>Password</Text>
//             <View style={styles.inputContainer}>
//               <FontAwesome5 name="lock" size={20} color={kTextBlackColor} style={styles.icon} />
//               <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={(text) => setPassword(text)}
//                 secureTextEntry={!passwordVisible}
//               />
//               <TouchableOpacity onPress={togglePasswordVisibility} style={styles.iconContainer}>
//                 <FontAwesome5
//                   name={passwordVisible ? 'eye-slash' : 'eye'}
//                   style={styles.togglePasswordIcon}
//                 />
//               </TouchableOpacity>
//               {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
//             </View>
//             <Text style={styles.togglePasswordText} onPress={togglePasswordVisibility}>
//               {passwordVisible ? 'Hide Password' : 'Show Password'}
//             </Text>

//             <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//               {isLoading ? (
//                 <ActivityIndicator size="small" color="gray" />
//               ) : (
//                 <>

//                 <Text style={styles.loginButtonText}>
//                   SIGN IN 
//                      <FontAwesome size={20} name="arrow-right" style={{marginHorizontal:20, }} />
//                 </Text>
//                 </>
//               )}
//             </TouchableOpacity>
//             <Text style={styles.forgotPassword} onPress={() => {}}>
//               Forgot Password
//             </Text>
//             <View style={styles.signupContainer}>
//               <Text style={styles.loginText}>Already have an account?</Text>
//               <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
//                 <Text style={styles.loginLink}> SignUp</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </ScrollView>
//       </KeyboardAvoidingView>
//     </SafeAreaView>
//   );
// };


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: kPrimaryColor,
//     marginTop: 29,
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
//     marginTop: 40,
//   },
//   title: {
//     fontSize: 44,
//     fontWeight: 'bold',
//     color: kTextWhiteColor,
//   },
//   subtitle: {
//     fontSize: 18,
//     color: kTextWhiteColor,
//     marginBottom: 20,
//     fontWeight: 'bold',

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
//     fontWeight: 'bold',
//     fontSize: 18,

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
//     backgroundColor: kPrimaryColor,
//     borderRadius: 50,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginTop: 20,
//     paddingLeft:10,
//   },
//   loginButtonText: {
//     color: kTextWhiteColor,
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginHorizontal:20,
//     paddingLeft:10,
//   },
//   forgotPassword: {
//     textAlign: 'center',
//     color: kPrimaryColor,
//     marginTop: 10,
//     fontWeight: 'bold',
//     fontStyle:'italic',

//   },
//   icon: {
//     marginRight: 5,
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     fontSize: 25,
//     marginLeft:5,

//   },
//   errorText: {
//     color: 'red',
//     fontSize: 14,
//     marginBottom: 10,
//     fontWeight: 'bold',

//   },
//   signupContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     marginTop: 17,
//     marginBottom: 20,
//   },
//   loginText: {
//     color: kPrimaryColor,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   loginLink: {
//     fontWeight: 'bold',
//     color:kSecondaryColor,
//     fontSize:18,
//     fontStyle:'italic',
//   },
// });

// export default SignInScreen;


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
              source={require('./../../assets/images/school-logo.png')}
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
                <>

                <Text style={styles.loginButtonText}>
                  SIGN IN 
                     <FontAwesome size={20} name="arrow-right" style={{marginHorizontal:20, }} />
                </Text>
                </>
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
    fontSize: 18,
    color: kTextWhiteColor,
    marginBottom: 20,
    fontWeight: 'bold',

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
    fontWeight: 'bold',
    fontSize: 18,

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
    backgroundColor: kPrimaryColor,
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
    paddingLeft:10,
  },
  loginButtonText: {
    color: kTextWhiteColor,
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal:20,
    paddingLeft:10,
  },
  forgotPassword: {
    textAlign: 'center',
    color: kPrimaryColor,
    marginTop: 10,
    fontWeight: 'bold',
    fontStyle:'italic',

  },
  icon: {
    marginRight: 5,
    color: kPrimaryColor,
    fontWeight: 'bold',
    fontSize: 25,
    marginLeft:5,

  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
    fontWeight: 'bold',

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
    color:kSecondaryColor,
    fontSize:18,
    fontStyle:'italic',
  },
});

export default SignInScreen;

