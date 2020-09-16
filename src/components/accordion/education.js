import React from "react";
import Subtitles from "../subtitles/subtitles";
import Accordion from "./accordion";
import "./education.scss";

const accordionData1 = [
  {
    title: (
      <p>
        <b>Self-taught web development with FreeCodeCamp</b>
        <p>Since May 2020</p>
      </p>
    ),
    text: (
      <p>
        <ul className="liste-education">
          <li>100% Responsive web design certification</li>
          <li>84% JavaScript algorithms and Data structure certification</li>
        </ul>
        My FreeCodeCamp profile :{" "}
        <a
          className="links-education"
          target="none"
          href="https://www.freecodecamp.org/lucile-vacquie"
        >
          @lucile-vacquie
        </a>
      </p>
    ),
  },
];
const accordionData2 = [
  {
    title: (
      <p>
        <b>Master's degree in Biology and Human Health</b>
        <p>2015 to 2017</p>
      </p>
    ),
    text: (
      <p>
        <p>
          <b>Title</b>: Food industry, Food regulation, Nutrition and Health
        </p>
        <p>
          <b>Option</b>: Marketing and Human Ressources
        </p>
        <p>
          <ul className="liste-education">
            <li>
              Design a nutrition strategy depending on the named person (age,
              disease, goals...).
            </li>
            <li>
              Develop food and food supplement by following the current
              regulation.
            </li>
            <li>
              Six months internship at the end of the year and several projects
              (alone and team).
            </li>
          </ul>
          <p>
            <a
              className="links"
              target="none"
              href="http://formations.univ-brest.fr/fr/index/sciences-technologies-sante-STS/master-XB/master-biologie-sante-program-fr_rne_0290346u_prog6841/parcours-alimentation-droit-nutrition-sante-subprogram-parcours-structure-modele-2.html?search-keywords=ADNS'"
            >
              Click here
            </a>{" "}
            to know more about this master's degree.
          </p>
        </p>
      </p>
    ),
  },
  {
    title: (
      <p>
        <b>Bachelor's degree in Biology</b>
        <p>2014 to 2015</p>
      </p>
    ),
    text: (
      <p>
        <p>
          <b>Title</b>: Biology and Behavioural Ecology
        </p>
        <p>
          <b>Option</b>: Algology
        </p>
        <p>
          Study of how living organisms function and interact with other
          organisms and/or environment.
          <p>
            <a
              className="links"
              target="none"
              href="http://formations.univ-brest.fr/fr/index/sciences-technologies-sante-STS/licence-XA/licence-mention-sciences-de-la-vie-program-fr_rne_0290346u_prog4024/parcours-biologie-des-organismes-et-des-populations-environnement-subprogram-2.html?search-keywords=biologie"
            >
              Click here
            </a>{" "}
            to know more about this bachelor's degree.
          </p>
        </p>
      </p>
    ),
  },
  {
    title: (
      <p>
        <b>Technological's degree in Biology and Food Industry</b>
        <p>2012 to 2014</p>
      </p>
    ),
    text: (
      <p>
        <p>
          <b>Title</b>: Food industry and Biology
        </p>
        <p>
          <ul className="liste-education">
            <li>
              Technician's degree specialized in microbiological and
              physicochemical quality control of food.
            </li>
            <li>
              Two months internship in first year and three months in second
              year.
            </li>
          </ul>
        </p>
        <p>
          <a
            className="links"
            target="none"
            href="http://formations.univ-brest.fr/fr/index/sciences-technologies-sante-STS/dut-CB/dut-genie-biologique-quimper-program-fr_rne_0290346u_prog12020/option-industries-alimentaires-et-biologiques-subprogram-2.html?search-keywords=biologie"
          >
            Click here
          </a>{" "}
          to know more about this technical degree.
        </p>
      </p>
    ),
  },
];

const AccordionEducation = () => {
  return (
    <>
      <Subtitles>Web Development</Subtitles>
      <Accordion accordionData={accordionData1}></Accordion>
      <Subtitles>University of Western Britany</Subtitles>
      <Accordion accordionData={accordionData2}></Accordion>
    </>
  );
};

export default AccordionEducation;
