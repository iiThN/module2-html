import profile from "../assets/profile.jpg";
import Card from "./Card";
function About() {
return (
    <div className= "container">
        <section class="card">
            <Card title="About Me">
                <p>This is my personal profile.</p>
            </Card>
            );

            <img src={profile} alt="Profile" className="about-img" />
            <p>I’m a second-year IT student who enjoys quiet moments, good music, and a warm cup of coffee.</p>

            <p>
                Email:
                <a href="mailto:capuras.anthony2003@gmail.com">capuras.anthony2003@gmail.com</a>
                GitHub:
                <a href="https://github.com" target="_blank">github.com</a>
            </p>
        </section>
    </div>
);
}
export default About;