import users from './users';
import places from './places';
import posts from './posts';
import comments from './comments';
import sortPosts from './sortPosts';
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
const rootReducer = combineReducers({
    users,
    places,
    posts,
    comments,
    sortPosts,
    form: formReducer
});

export default rootReducer;