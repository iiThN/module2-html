import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
  const education = [
    {
    year: "2028",
    program: "BS Information Technology",
    school: "USTP – CDO Campus"
    },
    {
    year: "2023",
    program: "Senior High School",
    school: "Liceo de Cagayan University"
    },
    {
      year: "2021",
      program: "Junior High School",
      school: "Macabalan National High School"
    },
    {
      year: "2017",
      program: "Elementary School",
      school: "Macabalan Elementary School"
    }
    ];    

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
    ];
  const [darkMode, setDarkMode] = useState(false);
return (
  
<>
<div className={darkMode ? "dark-mode" : ""}>
  <button onClick={() => setDarkMode(!darkMode)}>
   {darkMode ? "Light Mode" : "Dark Mode"}
  </button>

<Header />
<About />
<Skills skills={skills} />
<Education education={education} />
<Contact />
</div>

</>
  
);
}
export default App;