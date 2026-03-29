import React from "react";

function App() {
  // ✅ Variables (JSX Expressions)
  const name = "Muhammad Ahmed";
  const profession = "Frontend Developer";
  const experience = 2;

  // ✅ Skills Array
  const skills = ["HTML", "CSS", "JavaScript", "React"];

  // ✅ Multiple Profiles (Challenge)
  const developers = [
    {
      name: "Ali Khan",
      profession: "Frontend Developer",
      experience: 1,
      skills: ["HTML", "CSS", "JavaScript"],
      image: "https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg",
    },
    {
      name: "Imran Khan",
      profession: "UI/UX Designer",
      experience: 3,
      skills: ["Figma", "Adobe XD", "CSS"],
      image: "https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg",
    },
    {
      name: "Usman Ali",
      profession: "React Developer",
      experience: 2,
      skills: ["React", "JavaScript", "API"],
      image: "https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg",
    },
  ];

  return (
    <>
      {/* ✅ Single Profile Card */}
      <div className="profile-card" style={{ padding: "20px" }}>
        <img
          src="https://cdn.pixabay.com/photo/2021/11/09/15/54/mens-fashion-6781827_1280.jpg"
          alt="profile"
          className="profile-image"
        />

        <h2 className="profile-name" style={{ color: "blue" }}>
          {name}
        </h2>

        <p>
          Profession: {profession}
          <br />
          Experience: {experience} years
        </p>

        <h3>Skills</h3>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <button
          className="contact-button"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Contact Me
        </button>
      </div>

      {/* ✅ Multiple Profile Cards (Challenge Task) */}
      <h2>Developer Team</h2>

      {developers.map((dev, index) => (
        <div className="profile-card" key={index}>
          <img src={dev.image} alt="profile" className="profile-image" />

          <h2 className="profile-name">{dev.name}</h2>

          <p>
            Profession: {dev.profession}
            <br />
            Experience: {dev.experience} years
          </p>

          <h3>Skills</h3>
          <ul className="skills-list">
            {dev.skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>

          <button className="contact-button">Contact</button>
        </div>
      ))}
    </>
  );
}

export default App;