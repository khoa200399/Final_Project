import { configureStore } from '@reduxjs/toolkit'
import { locationApi } from 'components/OptionBar/locationApi'
import commonReducer from './common'

export const store = configureStore({
    reducer: {
        common: commonReducer,
        [locationApi.reducerPath]: locationApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(locationApi.middleware),

})