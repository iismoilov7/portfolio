import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import { authReducer } from '@src/reducers';
import thunkMiddleware from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session'; // Import session storage

const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__' as keyof Window] as typeof compose) ||
  compose;


const AuthPersistConfig = {
  key: 'auth',
  storage: storage, // Use session storage
};

// Combine reducers
export const rootReducer = combineReducers({
  auth: persistReducer(AuthPersistConfig, authReducer),
});

export type RootState = ReturnType<typeof rootReducer>;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware)
);

export const store = createStore(rootReducer, enhancer); // Apply middleware
export const persistor = persistStore(store);

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
