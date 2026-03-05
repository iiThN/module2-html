import { useState } from "react";

function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
function handleSubmit(e) {
    e.preventDefault();
    if (name === "" || email === "" ) {
        alert("Please fill in all required fields.");
    }
    else {
        alert(`Thank you ${name}!`);
    }
}
return (
<div className= "container">
    <section class="card">
        <h2>Contact Me</h2>

        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send</button>
        </form>
    </section>
</div>
);
}
export default Contact;