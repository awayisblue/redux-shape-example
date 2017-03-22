/**
 * Created by John on 2017/2/28.
 */
export default {
    state:0,
    reducers:{
        init(state,action){
            return action.count
        },
        increase(state,action){
            return state+1
        },
        decrease(state,action){
            return state-1;
        }
    }
}