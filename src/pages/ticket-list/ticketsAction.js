import { getAllTickets, getSingleTicket, updateReplyTicket, updateTicketStatusClosed } from '../../api/ticketApi';

import { 
    fetchTicketLoading, 
    fetchTicketSuccess, 
    fetchTicketFail,
    fetchSingleTicketLoading, 
    fetchSingleTicketSuccess, 
    fetchSingleTicketFail,
    replyTicketLoading, 
    replyTicketSuccess, 
    replyTicketFail,
    closeTicketLoading, 
    closeTicketSuccess, 
    closeTicketFail, 
    searchTickets } from './ticketSlice';

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

//Actions for single ticket only
export const fetchSingleTicket = (_id) => async (dispatch) => {
    dispatch(fetchSingleTicketLoading());
    try {
        const result = await getSingleTicket(_id);
        console.log(result);
   
        dispatch(
            fetchSingleTicketSuccess(
                result.data.result.length && result.data.result[0]));
    } catch (error) {
        dispatch(fetchSingleTicketFail(error.message));   
    }
}
//higher order function

//Actions for replying on single ticket
export const replyOnTicket = (_id, msgObj) => async (dispatch) => {
    dispatch(replyTicketLoading());
    try {
        const result = await updateReplyTicket(_id, msgObj);
        console.log(result);
        if(result.status === 'error'){
            return dispatch(replyTicketFail(result.message)); 
        }

        dispatch(fetchSingleTicket(_id));

        dispatch(replyTicketSuccess(result.message));
    } catch (error) {
        dispatch(replyTicketFail(error.message));   
    }
}

export const closeTicket = (_id) => async (dispatch) => {
    dispatch(closeTicketLoading());
    try {
        const result = await updateTicketStatusClosed(_id);
        console.log(result);
        if(result.status === 'error'){
            return dispatch(closeTicketFail(result.message)); 
        }

        dispatch(fetchSingleTicket(_id));

        dispatch(closeTicketSuccess(result.message));
    } catch (error) {
        dispatch(closeTicketFail(error.message));   
    }
}