import axios from 'redaxios';
import { CREATE_OR_LIST_CONTACT } from './ApiRoute';

export async function getContacts() {
    try {
        const response = await axios.get(CREATE_OR_LIST_CONTACT);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function createContact() {
    
}
  
export async function getContact(id) {
    
}
  
export async function updateContact(id, updates) {
    
}
  
export async function deleteContact(id) {
    
}