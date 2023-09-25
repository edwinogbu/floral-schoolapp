
import React from 'react';
import { StyleSheet, View } from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/screen/AuthContext'; // Import AuthProvider from the correct location

export default function App() {
  return (
    <AuthProvider>
      <View style={styles.container}>
        <RootNavigator />
      </View>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


// import React from 'react';
// import { StyleSheet, View } from 'react-native';
// import RootNavigator from './src/navigation/RootNavigator';
// import { AuthProvider } from './src/screen/AuthContext';


// export default function App() {
//   return (
//     <AuthProvider>
//       <View style={styles.container}>
//           <RootNavigator />
//       </View>
//     </AuthProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });
