import {KeyboardAwareScrollView, KeyboardProvider} from 'react-native-keyboard-controller'
import {Text, TextInput, View} from 'react-native';

export default function App() {
  return (
      <View style={{ flex: 1 }}>
        <KeyboardProvider>
          <KeyboardAwareScrollView>
            <View style={{ height: 800, backgroundColor: 'lightblue' }} />
            <Text>Input:</Text>
            <TextInput
                style={{ height: 44, borderStyle: 'solid', borderWidth: 1, borderColor: 'black' }}
                autoComplete="email" // or textContentType="emailAddress"
            />
            <View style={{ height: 800, backgroundColor: 'lightblue' }} />
          </KeyboardAwareScrollView>
        </KeyboardProvider>
      </View>
  );
}

