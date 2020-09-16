import React from "react";
import Accordion from "./accordion";

const accordionData = [
  {
    company: <p>Holland and Barrett, Manchester</p>,
    title: (
      <p>
        <b>Supervisor</b> - Jan to August 2020
      </p>
    ),
    text: (
      <p>
        I've been hired as a Sales Advisor to be part of a team of four
        colleagues. After 3 months, I've passed a certification which gave me
        the position of Senior Associate. Owing to circumstances and because my
        managers trusted me, they gave me the opportunity to be Supervisor/Duty
        Manager. My main tasks include:
        <ul>
          <li>Opening and closing the store and the tills</li>
          <li>Managing a small team</li>
          <li>
            Advising customers on health issues and offering dietary advices
          </li>
          <li>Everyday banking</li>
          <li>Sorting out the delivery and layout</li>
          <li>Updating stocks</li>
        </ul>
      </p>
    ),
  },
  {
    company: <p>Manchester</p>,
    title: (
      <p>
        <b>Au pair</b> - Feb 2019 to Dec 2019
      </p>
    ),
    text: (
      <p>
        I have been taking care of 6 yo twins, Ivy and Rose. In the mornings, I
        had to prepare them to go to school, made breakfast and bring them to
        school. Most of the time, I was picking them up. Once at home we had a
        play time (drawing, coloring, playing games, jigsaw...) and I had to
        prepare healthy (and yummy) dinner. I was free during the school time.
        At first, I used this time to discover Manchester, visiting museums and
        walking throught unknown quarters of the city. After a few weeks, I
        started volunteering at the Whalley Range gardening club (every
        tuesdays) and at Open Kitchen (once a week), a zero waste kitchen for
        workers. The last 4 months, I've been volunteering at the Oxfam Bookshop
        in Chorlton-Cum-Hardy (Monday to Friday). Those experiences have been
        great opportunities to improve my English (even if my best teachers were
        Ivy and Rose), to meet extraordinary people and to give me a reason to
        stay in England.
      </p>
    ),
  },
  {
    company: <p>Froneri S.A.S., Britany (France)</p>,
    title: (
      <p>
        <b>Project Engineer</b> - Sept 2017 to Dec 2018
      </p>
    ),
    text: (
      <p>
        I was in charge of the raw materials database. My role was to reference
        all the new raw materials and suppliers, updating their informations and
        all the documents linked to them. I was also responsible for multiple
        competing projetcs e.g. harmonization of the supply chain or decreasing
        overall financial outputs. To achieve those goals, I had to set up small
        to medium scale lab tests, sensory analysis and building reports. The
        major project was about the harmonization of all our vanilla aroma used
        in 4 different factories around France. At the beginning, more than 80
        aroma has been found. I had to go throught their caracteristics and try
        to regroup them into categories. Then, compare them into same category
        and eliminate the ones with the same or very close flavor, or the ones
        we simplely didn't use anymore. We end up with around 40 aroma, so half
        of what we had when started. The result was a huge gain of money
        (thousands of euro). Another of my responsibilities was to deal with
        sudden emergencies within the factory which required swift resolution.
        The most common issue was a missing or nonconforming raw material. The
        best example I can give you is when I received a nonconform blackberry
        puree. The supplier told us it was due to the bad weather all along this
        year, and the future deliveries will be the same quality. The issue is
        that the difference of taste and colour found in the puree would have
        consequences on the final product so would result as a nonconform
        production of ice cream for us. We had to find a way throught without
        modifying the ingredients list as the packaging were already produced.
        Unfortunatly, I can't give you the secret recipe! The operation was a
        success.
      </p>
    ),
  },
];

const AccordionExperiences = () => {
  return <Accordion accordionData={accordionData}></Accordion>;
};

export default AccordionExperiences;
