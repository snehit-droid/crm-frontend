import { configureStore } from '@reduxjs/toolkit';

import ticketsReducer from './pages/ticket-list/ticketSlice';

const store = configureStore({
    reducer: {
        tickets: ticketsReducer, 
    },
});

export default store;