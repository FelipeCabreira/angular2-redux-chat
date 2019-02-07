

// Actions
interface Action {
  type: string;
  payload?: any;}



// Interface de state
interface Reducer<T> {
  (state: T, action: Action): T;
}


// Metodo de reducer
let reducer: Reducer<number> = (state: number, action: Action) => {
  return state;
};
// reducer(state, action)
console.log( reducer(0, null) ); // -> 0
