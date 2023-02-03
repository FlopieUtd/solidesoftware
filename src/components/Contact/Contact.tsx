import { useRef } from "react";
import "./Contact.css";

export const Form = () => {
  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLTextAreaElement | null>(null);
  const submitRef = useRef<HTMLInputElement | null>(null);

  function validateContactForm() {
    if (
      !nameRef.current ||
      !emailRef.current ||
      !messageRef.current ||
      !submitRef.current
    ) {
      return;
    }

    const isContactFormValid = !!(
      nameRef.current.value.length &&
      emailRef.current.value.length &&
      messageRef.current.value.length
    );
    submitRef.current.disabled = !isContactFormValid;
    submitRef.current.title = isContactFormValid
      ? ""
      : "Please fill in all fields.";
  }

  return (
    <form action="contact.php" method="post">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        onInput={validateContactForm}
        ref={nameRef}
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        name="email"
        onInput={validateContactForm}
        ref={emailRef}
      />
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        onInput={validateContactForm}
        ref={messageRef}
      ></textarea>
      <input
        type="submit"
        id="submit-contact-form"
        value="Send"
        title="Please fill in all fields."
        disabled
        ref={submitRef}
      />
    </form>
  );
};
