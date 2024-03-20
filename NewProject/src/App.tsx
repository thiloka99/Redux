import React from 'react';
import Counter from './redux/counter';
import { ScrollView } from 'react-native';

const App = () =>{

  return (
    <ScrollView>
        <Counter />
    </ScrollView>   
  );
}

export default App;