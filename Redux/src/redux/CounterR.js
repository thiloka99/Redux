const INCREMENT = 'increment';
const DECREMENT = 'decrement';

export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})

const initialSate = {
    count:0
};

export default (state = initialSate, action) => {
    switch(action.type){
        case INCREMENT:
            return {...state, count: state.count + 1};
            break;

        case DECREMENT:
            return {...state, count: state.count - 1};
            break;

        default:
            return state;
    }
};