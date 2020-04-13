import { createStore } from 'reducer';
import reducer from './reduce';

const store = createStore(reducer)

export default store;