import axios from 'axios';

export const getAllTickets = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const result = await axios.get('http://localhost:3001/v1/ticket', {headers: { Authorization: '' }})
            resolve(result);
        } catch (error) {
            reject(error); 
        }
    }) 
}