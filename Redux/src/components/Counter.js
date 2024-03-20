import React from "react";
import {View, Text, Button} from 'react-native'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/CounterR";

function Counter(props) {

    const {name} = props;
    const [votes, setVotes] = React.useState(0);
    //const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
        setVotes(votes + 1);
    };
    const handleDecrement = () => {
        dispatch(decrement());
        setVotes(votes - 1);
    };

    return(
        <View>
            <Text>{name}   Votes :-  {votes}</Text>
            <Button onPress={handleIncrement} title="Increment"/>
            <Button onPress={handleDecrement} title="Decrement"/>
        </View>
    )
}

export default Counter;