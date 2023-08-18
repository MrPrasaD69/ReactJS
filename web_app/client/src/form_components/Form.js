import UserForm from "./UserForm";
import { useCallback, useEffect, useRef, useState } from "react";

const FORM_ENDPOINT =
  "https://practical-roentgen.31-187-70-64.plesk.page/api/Api.php"; // TODO - update to the correct endpoint

const Form = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");

  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { handleSubmit, status, message } = UserForm({
    additionalData,
  });

  const data = {
    first_name: firstname, //backend : front end
    email_id : email,
  };

  const onSubmitHandler = useCallback(() => {
    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(() => {
        console.log("We'll be in Touch with you.");
        console.log("success");
      })
      .catch((err) => {
        console.log(err.toString());
        console.log("error");
      });
  }, []);

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form action={FORM_ENDPOINT} onSubmit={onSubmitHandler} method="POST">
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="first_name"
          required
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="pt-0 mb-3">
        <input type="email_id" placeholder="Email" name="email_id" value={email} required onChange={(e)=> setEmail(e.target.value)} />
      </div>
      <div className="pt-0 mb-3">
        <textarea placeholder="Your message" name="message" required />
      </div>
      {status !== "loading" && (
        <div className="pt-0 mb-3">
          <button type="submit">
            Send a message
          </button>
        </div>
      )}
    </form>
  );
};

export default Form;
