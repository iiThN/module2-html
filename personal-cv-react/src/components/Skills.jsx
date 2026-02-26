import { useState } from "react";

function Skills() {
    const [visible, setVisible] = useState(true);
return (
<section class="card" id="skillsSection"> 
    <button onClick={() => setVisible(!visible)}>
        Show/Hide Skills
    </button>
    <h2>Skills</h2>

    {visible && (
    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Web Development
            <ul>
                <li>Frontend</li>
                <li>Backend</li>
            </ul>
        </li>
    </ul>
    )}

</section>
);
}
export default Skills;