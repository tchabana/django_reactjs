import axios from "redaxios";
import {
    CREATE_OR_LIST_CONTACT,
    DELETE_CONTACT,
    SHOW_CONTACT,
    UPDATE_CONTACT,
} from "./ApiRoute";

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
        const response = await axios.post(CREATE_OR_LIST_CONTACT, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
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
        const formData = new FormData();

        // Ajoutez les champs de formulaire à FormData
        formData.append("first_name", updates.first_name);
        formData.append("last_name", updates.last_name);
        formData.append("twitter", updates.twitter);
        formData.append("phone", updates.phone);
        formData.append("avatar", updates.avatar[0]); // Assurez-vous que "avatar" correspond au nom de votre champ de fichier
        formData.append("notes", updates.notes);
        formData.append("stared", updates.stared);
        const response = await axios({
            method: 'put',
            url: UPDATE_CONTACT(id),
            data: formData,
        });

        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export async function deleteContact(id) {
    try {
        const response = await axios.delete(DELETE_CONTACT(id));
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
