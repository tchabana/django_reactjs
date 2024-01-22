import { NavLink, useFetcher, useParams,redirect } from "react-router-dom";
import { useForm} from "react-hook-form";
import { deleteContact, getContact } from "../service/DataFetch";
import { useEffect, useState } from "react";

export default function Contact() {
  const { handleSubmit } = useForm()
  const { contactId } = useParams();
  const [contact, setContact] = useState();
  const onSubmit = () => {
    deleteContact(contactId);
    alert('supression effectuer.');
    //window.location.assign("/")
    return redirect("/");
  }
  useEffect(() => {
    getContact(contactId).then((r) => {
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
          <NavLink to={`/contacts/${contactId}/edit`}>
            <button type="submit">Edit</button>
          </NavLink>
          <form onSubmit={handleSubmit(onSubmit)}>
            <button id="error" type="submit">Delete</button>
          </form>
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