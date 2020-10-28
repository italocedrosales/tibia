import React from 'react';
import { View, Text, StatusBar } from 'react-native';

// import { Container } from './styles';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
    <View
      style={{
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ fontSize: 32, color: '#fff' }}>Hello Tibia</Text>
    </View>
  </>
);

export default App;
