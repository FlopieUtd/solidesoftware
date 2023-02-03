import { useState } from "react";
import { Modal } from "src/components/Modal/Modal";
import "./Projects.css";

interface Project {
  name: string;
  url: string;
  video: string;
  year: number;
  description: string;
}

export const projects: Project[] = [
  {
    name: "Perudo",
    url: "https://www.solidesoftware.nl/polliwop/",
    video: "./videos/polliwop.mp4",
    year: 2022,
    description:
      "Perudo (also known as liar's dice) is a dice game played with two or more players. No dice at hand? No problem, play Perudo on your mobile phone!",
  },
  // {
  //   name: "Watchbox",
  //   url: "https://www.solidesoftware.nl/",
  //   video: "./videos/watchbox.mp4",
  //   year: 2022,
  //   description:
  //     "Around 2022, I was seriously into wrist watches. One thing many watch sites lack is a convenient way to (visually) compare the diameter size of watches. Watchbox is a small pet project that aims to let users do exactly that.",
  // },
  {
    name: "Asteroids",
    url: "https://flopieutd.github.io/asteroids/",
    video: "./videos/asteroids.mp4",
    year: 2019,
    description: "What can I tell you. Asteroids, but with upgrades.",
  },
  {
    name: "Mamba",
    url: "https://flopieutd.github.io/mamba/",
    video: "./videos/mamba.mp4",
    year: 2017,
    description:
      "The first project that got me hooked on web development and more specifically programming, Mamba. The original Mamba was created by Bert Uffen in 1989, but has since disappeared to the realm of dust-collecting floppy disks. I tried to recreate the original game as close as I could with HTML, CSS and JavaScript. Apparently I'm not the only one hit by nostalgia, evidenced by over 500 unique players each month.",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenModal = (project: Project) => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.style.overflow = "hidden";
    setActiveProject(project);
  };

  const handleCloseModal = () => {
    const body = document.querySelector("body");
    if (!body) {
      return;
    }
    body.style.overflow = "auto";
    setActiveProject(null);
  };

  return (
    <>
      <div className="pet-projects-container">
        {projects.map((project) => (
          <button
            onClick={() => {
              handleOpenModal(project);
            }}
            className="project-button"
            key={project.name}
          >
            <video autoPlay muted loop>
              <source src={project.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="overlay">{project.name}</div>
          </button>
        ))}
      </div>
      {activeProject && (
        <Modal onClose={handleCloseModal}>
          <div className="active-project">
            <div className="active-project-description">
              <h3>
                {activeProject.name} ({activeProject.year})
              </h3>
              <div>
                <p>{activeProject.description}</p>
                <a href={activeProject.url}>Check out {activeProject.name}</a>
              </div>
            </div>
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={activeProject.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
