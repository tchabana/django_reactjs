import axios from 'redaxios';
import { CREATE_OR_LIST_CONTACT, SHOW_CONTACT, UPDATE_CONTACT } from './ApiRoute';

export async function getContacts() {
    try {
        const response = await axios.get(CREATE_OR_LIST_CONTACT);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createContact(data) {
    try {
        const response = await axios.post(CREATE_OR_LIST_CONTACT,data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
  
export async function getContact(id) {
    try {
        const response = await axios.get(SHOW_CONTACT(id));
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}
  
export async function updateContact(id, updates) {
    try {
        const response = await axios.post(UPDATE_CONTACT(id),updates);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}
  
export async function deleteContact(id) {
    try {
        const response = await axios.delete(CREATE_OR_LIST_CONTACT,data);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
    
}