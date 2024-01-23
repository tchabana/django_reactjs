import { useNavigate, useParams } from "react-router-dom";
import { getContact, updateContact } from "../service/DataFetch";
import { useEffect, useState } from "react";
import { useForm} from "react-hook-form";

export default function EditContact() {
  const [contact,setContact] = useState();
  const {contactId} = useParams();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    updateContact(contactId,data);
    navigate("/")
  }
  useEffect(() => {
    getContact(contactId).then((r)=> {
      setContact(r.data);
      reset(r.data);
      setValue("avatar",r.data.avatar);
      console.log(r.data.avatar);
    });
  }, []);
  let inital = {...contact}
  const { register, handleSubmit, formState: { errors },reset ,setValue} = useForm({ defaultValues:inital})
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" encType="multipart/form-data">
      <p>
        <span>Name</span>
        <input
          {...register("first_name")}
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first_name"
          defaultValue={inital.first_name}
        />
        
        <input
          {...register("last_name")}
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last_name"
          defaultValue={inital.last_name}
        />
      </p>
      <p id="p-full-name-error">
        {errors.first_name && <span id="error">Veuillez saisir le first_name</span>}
        {errors.last_name && <span id="error">Veuillez saisir le last_name</span>}
      </p>
      <label>
        <span>Twitter</span>
        <input
        {...register("twitter")}
          type="text"
          name="twitter"
          placeholder="@jack"
          defaultValue={inital.twitter}
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          {...register("phone")}
          type="text"
          name="phone"
          placeholder="+228 92193983"
          defaultValue={inital.phone}
        />
      </label>
      {errors.phone && <span id="error">Veuillez saisir le tel</span>}
      <label>
        <span>Avatar URL</span>
        <input
          {...register("avatar")}
          type="file"
          name="avatar"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
        {...register("notes")}
          name="notes"
          defaultValue={contact?.notes}
          rows={6}
        />
      </label>
      <p>
      <span>Stared</span>
        <input
          {...register("stared")}
          name="stared"
          type="checkbox"
          defaultChecked={inital?.stared}
        />
      </p>
      <p>
        <button type="submit">Save</button>
        <button 
            type="button"
            onClick={() => {
                navigate(-1);
              }}
            >Cancel</button>
      </p>
    </form>
  );
}