import { Form } from "src/components/Contact/Contact";
import { skills } from "src/data";
import "./App.css";
import { SplashCard } from "../SplashCard/SplashCard";
import { Projects } from "src/components/Projects/Projects";

export const App = () => {
  return (
    <>
      <div className="splash">
        <SplashCard />
      </div>
      <div className="content">
        <h2>About</h2>
        <h3>Biography</h3>
        <p>
          Hi! I'm Floris. I'm a Groningen based senior frontend developer with
          over{` ${new Date().getFullYear() - 2017} `}years of experience in the
          field of frontend development. I graduated with a Master's degree in
          Communication Sciences at the Rijksuniversiteit Groningen in 2016, and
          subsequently worked for the scale-ups Fotofabriek, Simplicate and
          Dataprovider.com.
        </p>
        <p>
          I'm passionate about approaching software development as an
          engineering discipline and I love helping teams make their codebase
          structured, predictable, maintainable, testable, and scalable.
        </p>
        <p>
          I have strong communication skills, I'm great at analyzing complex
          issues, and weighing trade offs of possible solutions. I'm eager to
          learn and do so with relative ease. Colleagues describe me as an
          involved and humorous person.
        </p>
        <p>
          On a more personal note, I'm married, I have a ginger tabby cat called
          Pierre and I'm eagerly learning to play the piano.
        </p>
        <h3>Skill set</h3>
        <p>
          I have extensive experience with the following technologies,
          languages, and methodologies:
        </p>
        <div className="skill-set">
          {skills.map((skillItem) => (
            <div className="skill-set-item">
              {skillItem.image && (
                <img src={skillItem.image} alt={skillItem.name} />
              )}
              {skillItem.name}
            </div>
          ))}
        </div>
        <h3>Experience</h3>
        <h4>Dataprovider.com (2021 - now)</h4>
        <br />
        <p>
          Dataprovider.com offers a structured search engine that indexes over
          600 million internet domains and allows users to refine search results
          by over 200 variables. Dataprovider.com is relied on by enterprises
          such as Google, Paypal, and GoDaddy. At Dataprovider.com, I'm part of
          the Integrations team, which is responsible for developing the core
          product's web application, as well as the customer facing website.
        </p>
        <p>
          At Dataprovider.com, I helped develop and succesfully execute a
          strategy to migrate the entire frontend repository to TypeScript. I
          also initiated multiple knowledge sessions around topics like
          decoupling business logic from view components, meaningful variable
          naming and proper use of comments. Finally, I helped refactor hard to
          maintain (1000+ lines of code) and untested components to smaller,
          single-concern and unit tested components.
        </p>
        <h4>Simplicate (2018 - 2021)</h4>
        <br />
        <p>
          Simplicate creates all-in-one business software covering CRM, sales
          management, project management, planning and invoicing.
        </p>
        <p>
          At Simplicate, I helped develop a wide range of functionalities on the
          platform, including a Google Calendar-like time registration tool, a
          what-you-see-is-what-you-get PDF generator for creating quotes, and a
          sales funnel kanban board.
        </p>
        <h4>Fotofabriek (2017 - 2018)</h4>
        <br />
        <p>
          Fotofabriek runs several webshops in the printing industry. At
          Fotofabriek, I helped develop these webshops and more specifically
          developed a product configurator in Angular and a later iteration in
          Vue.js.
        </p>
        <h2>Pet projects</h2>
        <p>
          The code I write in professional capacity is proprietary and
          unfortunately closed source. Below you find some pet projects I wrote
          in my spare time.
        </p>
        <Projects />
        <h2>Contact</h2>
        <Form />
        <div className="footer">
          <a
            href="https://www.linkedin.com/in/floris-de-haan-b6551296/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/FlopieUtd/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./images/github.png" alt="GitHub" />
          </a>
          <div>KvK: 88494268</div>
        </div>
      </div>
    </>
  );
};
