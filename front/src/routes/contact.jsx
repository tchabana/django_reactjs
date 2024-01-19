import { Form, useFetcher, useLoaderData, useParams } from "react-router-dom";
import { updateContact } from "../contacts";
import { getContact } from "../service/DataFetch";
import { useEffect, useState } from "react";

export async function action({ request, params }) {
  let formData = await request.formData();
  return updateContact(params.contactId, {
    favorite: formData.get("favorite") === "true",
  });
}
export async function loader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}


export default function Contact() {
    const {contactId} = useParams();
    const [contact,setContact] = useState();
    useEffect(() => {
      getContact(contactId).then((r)=> {
        setContact(r.data);
      });
    }, [contactId]);
  return (
    <div id="contact">
      <div>
        <img
          key={contact?.avatar}
          src={contact?.avatar || null}
        />
      </div>

      <div>
        <h1>
          {contact?.first_name || contact?.last_name ? (
            <>
              {contact?.first_name} {contact?.last_name}
            </>
          ) : (
            <i>No Name</i>
          )}{" "}
          <Favorite contact={contact} />
        </h1>
        <h3>
          {contact?.phone}
        </h3>
        {contact?.twitter && (
          <p>
            <a
              target="_blank"
              href={`https://twitter.com/${contact?.twitter}`}
            >
              {contact?.twitter}
            </a>
          </p>
        )}

        {contact?.notes && <p>{contact?.notes}</p>}

        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
   const fetcher = useFetcher();
  // yes, this is a `let` for later
  let favorite = contact?.stared;
  return (
    <fetcher.Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={
          favorite
            ? "Remove from favorites"
            : "Add to favorites"
        }
      >
        {favorite ? "★" : "☆"}
      </button>
      </fetcher.Form>
  );
}