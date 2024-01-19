import { Form, useLoaderData,redirect, useNavigate, useParams } from "react-router-dom";
import { getContact, updateContact } from "../service/DataFetch";
import { useEffect, useState } from "react";

export async function action({ request, params }) {
  const formData = await request.formData();
  updateContact(params.contactId, formData);
  return redirect(`/contacts/${params.contactId}`);
}
export default function EditContact() {
  const [contact,setContact] = useState();
  const {contactId} = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getContact(contactId).then((r)=> {
      setContact(r.data);
    });
  }, []);
  return (
    <Form method="post" id="contact-form" onEncryptedCapture="multipart/form-data">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first_name"
          defaultValue={contact?.first_name}
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last_name"
          defaultValue={contact?.last_name}
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={contact?.twitter}
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          type="text"
          name="phone"
          placeholder="+228 92193983"
          defaultValue={contact?.phone}
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="file"
          //name="avatar"
          defaultValue={contact?.avatar}
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button 
            type="button"
            onClick={() => {
                navigate(-1);
              }}
            >Cancel</button>
      </p>
    </Form>
  );
}