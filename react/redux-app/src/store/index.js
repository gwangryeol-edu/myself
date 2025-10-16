// configureStore 함수
// 리듀서를 받아서 스토러를 생성하는 함수
import { configureStore } from "@reduxjs/toolkit";
// 리듀서 불러오기
import counterReducer from "./counterSlice";
import authReducer from "./authSlice";

// reduce persist 모듈
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Redux Persist 모듈 불러오기
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const authPersistConfig = {
  key: "auth", // 로컬 스토리지 내 속성명
  storage: storage, // 어떤 웹 저장소를 사용할 것인가 -> 로컬 스토리지
  whitelist: ["token"], // 어떤 상태를 저장할 것인가
};

// Persist Reducer 생성
// persistReducer: 지속 가능한 리듀서를 생성하는 ㅎ마수
// authPersistConfig: 설정
// authReducer 원본 리듀서
const persistAuthReducer = persistReducer(authPersistConfig, authReducer);

// 스토어 생성
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: persistAuthReducer,
  },
  // middleware 속성 추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// persist 스토어 생성 및 내보내기
export const persistor = persistStore(store);
