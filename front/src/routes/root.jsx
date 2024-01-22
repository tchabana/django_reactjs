import { Outlet,  NavLink, useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getContacts as apiGetContacts } from "../service/DataFetch";

export default function Root() {
  const [contacts, setConatacts] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    apiGetContacts().then((r) => {
      setConatacts(r.data);
    });
  },[]);
  
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
          </form>
          <NavLink to={"contacts-create/"}>
            <button type="submit">New</button>
          </NavLink>
        </div>
        <nav>
          {contacts.length ? (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <NavLink
                    to={`contacts/${contact.id}`}
                    className={({ isActive, isPending }) =>
                      isActive
                        ? "active"
                        : isPending
                          ? "pending"
                          : ""
                    }
                  >
                    {contact.first_name || contact.last_name ? (
                      <>
                        {contact.first_name} {contact.last_name}
                      </>
                    ) : (
                      <i>No Name</i>
                    )}{" "}
                    {contact.favorite && <span>★</span>}
                  </NavLink>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No contacts</i>
            </p>
          )}
        </nav>
      </div>
      <div id="detail"
        className={
          navigation.state === "loading" ? "loading" : ""
        }
      >
        <Outlet />
      </div>
    </>
  );
}