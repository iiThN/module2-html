import { useEffect, useState } from "react";

function ContactList() {
    const [contacts, setContacts] = useState([]);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        fetch("http://localhost/cv-api/getContacts.php")
            .then(res => res.json())
            .then(data => setContacts(data));
    }, []);

    return (
        <div className="container">
            <section className="card">
                <button onClick={() => setVisible(!visible)}>
                    {visible ? "Hide Saved Contacts" : "Show Saved Contacts"}
                </button>

                <h2>Saved Contacts</h2>
                {visible && (
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.map((contact) => (
                            <tr key={contact.id}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                )}
            </section>
        </div>
    );
}

export default ContactList;