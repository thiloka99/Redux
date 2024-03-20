import React from 'react';
import {View, Text} from 'react-native';
import Counter from './components/Counter';
import { useSelector } from "react-redux";

const App = () => {
  const count = useSelector((state) => state.counter.count);
  
  return (
    <View>
      <Text style={{fontWeight:'bold', fontSize:20}}>Total Votes : {count}</Text>
        <Counter name="Colombo"/>
        <Counter name="Galle"/>
        <Counter name="Jaffna"/>
    </View>
  )
}

export default App;