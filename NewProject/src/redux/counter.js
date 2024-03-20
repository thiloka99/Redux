import React from 'react';
import {View, Text, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './counterSlice'; // Import actions from your slice
import {StyleSheet} from 'react-native'

const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();

  return (
    <View>
      <Text style={style.text}>{count}</Text>
      <View style={style.buttonContainer}>
        <Button onPress={() => dispatch(increment())} title="Increment" />
        <Button onPress={() => dispatch(decrement())} title="Decrement" />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  text:{
    color:'red',
    marginLeft:180,
    marginBottom:40,
    marginTop:40,
    fontSize:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '95%',
  },
 
})

export default Counter;