import { getAllTickets } from '../../api/ticketApi';

import { fetchTicketLoading, fetchTicketSuccess, fetchTicketFail, searchTickets } from './ticketSlice';

export const fetchAllTickets = () => async (dispatch) => {
    dispatch(fetchTicketLoading());
    try {
        ////fetch data from api
        const result = await getAllTickets();
        console.log(result);
   
        dispatch(fetchTicketSuccess(result.data.result));
    } catch (error) {
        dispatch(fetchTicketFail(error.message));   
    }
}
//higher order function

export const filterSearchTicket = (str) => (dispatch) => {
    dispatch(searchTickets(str));
}