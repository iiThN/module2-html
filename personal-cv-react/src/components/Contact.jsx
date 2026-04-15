import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      alert("Please fill in all required fields.");
      return;
    }

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        alert("Failed to connect to the server.");
      });
  }

  return (
    <div className="container">
      <section className="card">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <textarea
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <button type="submit">Send</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;