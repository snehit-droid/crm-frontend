import { configureStore } from '@reduxjs/toolkit';

import ticketsReducer from './pages/ticket-list/ticketSlice';
import loginReducer from './components/login/loginSlice';
import userReducer from './pages/dashboard/userSlice';
import newTicketReducer from './components/add-ticket-form/addTicketSlicer'

const store = configureStore({
    reducer: {
        tickets: ticketsReducer,
        login: loginReducer,
        user: userReducer, 
        openTicket: newTicketReducer,
    },
});

export default store;