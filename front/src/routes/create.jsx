import { Form,redirect, useNavigate } from "react-router-dom";
import { createContact } from "../service/DataFetch";


export async function action({ request }) {
  const formData = await request.formData();
  createContact(formData);
  //console.log(`${formData}`);
  return redirect(`/`);
}
export default function CreateContact() {

  const navigate = useNavigate();

  return (
    <Form method="post" id="contact-form">
      <p>
        <span>Name</span>
        <input
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first_name"
        />
        <input
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last_name"
        />
      </p>
      <label>
        <span>Twitter</span>
        <input
          type="text"
          name="twitter"
          placeholder="@jack"
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          type="text"
          name="phone"
          placeholder="+228 92193983"
        />
      </label>
      <label>
        <span>Avatar URL</span>
        <input
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="file"
          //name="avatar"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          name="notes"
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