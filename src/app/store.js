import { configureStore } from "@reduxjs/toolkit";

import { cryptoApi } from "../services/cryptoAPi";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
});
