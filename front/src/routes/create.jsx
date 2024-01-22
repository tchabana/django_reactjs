import { redirect, useNavigate } from "react-router-dom";
import { useForm} from "react-hook-form";
import { createContact } from "../service/DataFetch";


export default function CreateContact() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const navigate = useNavigate();
  const onSubmit = (data) => {
    createContact(data);
    navigate("/")
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} id="contact-form" encType="multipart/form-data">
      <p>
        <span>Name</span>
        <input
          {...register("first_name", { required: true })}
          placeholder="First"
          aria-label="First name"
          type="text"
          name="first_name"
        />
        
        <input
          {...register("last_name", { required: true })}
          placeholder="Last"
          aria-label="Last name"
          type="text"
          name="last_name"
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
        />
      </label>
      <label>
        <span>Phone Number</span>
        <input
          {...register("phone" , { required: true })}
          type="text"
          name="phone"
          placeholder="+228 92193983"
        />
      </label>
      {errors.phone && <span id="error">Veuillez saisir le tel</span>}
      <label>
        <span>Avatar URL</span>
        <input
          //{...register("avatar")}
          placeholder="https://example.com/avatar.jpg"
          aria-label="Avatar URL"
          type="file"
          //name="avatar"
        />
      </label>
      <label>
        <span>Notes</span>
        <textarea
          {...register("notes")}
          name="notes"
          rows={6}
        />
      </label>
      <p>
      <span>Stared</span>
        <input
          {...register("stared")}
          name="stared"
          type="checkbox"
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