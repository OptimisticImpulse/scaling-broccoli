import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img
            src={icon}
            alt="web-development"
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        My technical skill set includes expertise in customer support, front-end
        and back-end web development, system administration, also
        troubleshooting, supporting, validating, and deploying all kinds of
        integrations, running queries, generate reports. and more...
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />I am proficient in a variety of
        programming languages and technologies, including HTML, CSS, JavaScript,
        React.JS, Python, Java, SQL, Node.JS, Django, and API technologies.{" "}
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        In my most recent role as a Technical Analyst, I support integrations,
        deploy tools, and collaborate with cross-functional teams to ensure
        seamless integration processes. I also played a key role in developing
        internal testing tools that generated valuable insights for our team.
        <br className="sm:block hidden" />
        <br className="sm:block hidden" />I am excited about the opportunity to
        bring my skills and expertise to your company and contribute to its
        continued success. I am eager to learn more about the available position
        and discuss how my background aligns with your team's needs.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
