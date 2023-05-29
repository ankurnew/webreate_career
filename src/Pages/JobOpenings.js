import React, { useEffect, useRef, useState } from "react";
import "../Styling/JobOpen.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .matches(/^\d+$/, "Mobile number must be numeric")
    .required("Mobile number is required"),
  position: Yup.string().required("Job position is required"),
  resume: Yup.mixed().required("Resume is required"),
});

const initialValues = {
  name: "",
  mobile: "",
  position: "",
  resume: null,
};

const JobOpenings = () => {
  const fileInputRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[n - 1].style.display = "block";
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form values:", values);

    resetForm({ values: { ...initialValues, resume: null } });

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="whyweb1">
            <h2 className="grow">Social Media Manager</h2>{" "}
            <h4 className="grow-def">
              We need a talented social media manager to manage our social media
              accounts.
            </h4>
            <h3 className="mid-heading">Responsibilities</h3>
            <p className="text-center">
              Capable of meeting current benchmark trends and audience
              preferences.
              <br />
              Able to design and implement a social media strategy that aligns
              with the company's objectives.
              <br />
              Set specific goals and report on ROI
              <br />
              Keep track of SEO and web traffic metrics.
              <br />
              Capable of collaborating with other teams, such as marketing,
              sales, and customer service, to ensure brand consistency
              <br />
              Capable of communicating with followers, responding to questions
              quickly, and monitoring customer reviews.
              <br />
              Supervise the design of social media accounts (like Facebook,
              profile pictures, and blog layout.)
              <br />
              Capable of staying relevant with current social media technologies
              and trends and designing tools and applications.
              <br />
            </p>
            <h3 className="mid-heading">Skills</h3>
            <p className="text-center">
              Excellent communication abilities.
              <br />
              Practical knowledge of content management.
              <br />
              Excellent understanding of SEO, keyword research, and Google
              analytics.
              <br />
              Excellent written and verbal communication skills.
              <br />
              Knowledge of online marketing channels.
              <br />
              Experience with web design.
              <br />
              Knowledge of online marketing channels.
              <br />
              Capable of organizing and multitasking
              <br />
            </p>
          </div>
          <div className="postion-slider">Social Media Manager</div>
        </div>

        <div className="mySlides fade">
          <div className="whyweb1">
            <h2 className="grow">Software Developer</h2>{" "}
            <h4 className="grow-def">
              Our company is looking for a talented software developer to assist
              with developing one of our current projects.
            </h4>
            <h3 className="mid-heading">Responsibilities</h3>
            <p className="text-center">
              Able to modify the software to correct errors, adapt to new
              hardware, improve performance, or upgrade interfaces.
              <br />
              Responsible for system testing and validation.
              <br />
              Managing the development of software and documentation.
              <br />
              Able to discuss project status and proposals with departments or
              customers.
              <br />
              Analyzing data to recommend and plan the installation of new
              systems or changes to existing systems.
              <br />
              Working with designers and developers to assess software-hardware
              interfaces and develop specifications and performance
              requirements.
              <br />
              Developing software systems by using scientific analysis and
              mathematical models to predict, measure, and design outcomes.
              <br />
              Generating reports on programming project specifications,
              activities, and status.
              <br />
            </p>
            <h3 className="mid-heading">Skills</h3>
            <p className="text-center">
              Knowledge of the software development life cycle.
              <br />
              Want to work in a fast-paced environment.
              <br />
              The ability to Unit testing for code components or entire
              applications.
              <br />
              A full-stack developer who understands software engineering
              concepts is required.
              <br />
              Knowledge of programming languages is required.
              <br />
              The ability to quickly learn new technology.
              <br />
              Capability to communicate complex procedures to coworkers.
            </p>
          </div>
          <div className="postion-slider">Software Developer</div>
        </div>

        <div className="mySlides fade">
          <div className="whyweb1">
            <h2 className="grow">WordPress Web Developer</h2>
            <h4 className="grow-def">
              Our company is looking for a talented WordPress Web Developer to
              assist with developing the projects.
            </h4>
            <h3 className="mid-heading">Responsibilities</h3>
            <p className="text-center">
              Developing the front end of the website.
              <br />
              Planning and creating the website architecture.
              <br />
              Command in Elementor page builder plugin.
              <br />
              Understanding of plugins used to develop eCommerce, service, and
              other websites.
              <br />
              Overseeing back-end tasks such as database and server integration.
              <br />
              Development of WordPress themes and plugins.
              <br />
              Website testing and troubleshooting.
              <br />
              Keeping the website secure and compliant.
              <br />
              Ensuring the overall product quality.
              <br />
            </p>
            <h3 className="mid-heading">Skills</h3>
            <p className="text-center">
              Basic knowledge of CSS3, JavaScript, HTML, and MySQL.
              <br />
              Basic understanding of code versioning tools, including GIT,
              Mercurial, and SVN.
              <br />
              Experience working with debugging tools like Chrome, Inspector,
              and Firebug.
              <br />
              Ability to manage projects.
              <br />
              Good understanding of website architecture and aesthetics.
              <br />
              Excellent communication skills.
              <br />
            </p>
          </div>
          <div className="postion-slider">WordPress Web Developer</div>
        </div>
      </div>

      <section className="appointment">
        <div className="slider-buttons">
          <a className="prev" onClick={() => plusSlides(-1)}>
            ❮❮
          </a>
          <a className="next" onClick={() => plusSlides(1)}>
            ❯❯
          </a>
        </div>
        <div className="first-sec">
          <div className="left-content">
            <h3 className="head">Make An</h3>
            <h2 className="colored">Appointment</h2>
            <p className="quote">
              Just make an appointment to get help from our experts.
            </p>
          </div>
          <div className="right-content">
            {/* <img src="imgs/career.png" alt="Type:Full Time" /> */}
            <h3>Type:Full Time</h3>
            <h3>Location:Dehradun</h3>
            <h3>Starting Date:</h3>
          </div>
        </div>
        <div className="form-sec">
          <div className="vertical-section">
            <h2 className="vertical-text">Join Us</h2>
          </div>
          <div className="form-details-field">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="field">
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>
                <div className="errors-msg">
                  <ErrorMessage name="name" component="div" className="error" />
                </div>

                <div className="field">
                  <Field
                    type="text"
                    id="mobile"
                    name="mobile"
                    placeholder="Mobile Number"
                  />
                </div>
                <div className="errors-msg">
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="error"
                  />
                </div>

                <div className="field">
                  <Field
                    type="text"
                    id="position"
                    name="position"
                    placeholder="Post Applied For"
                  />
                </div>
                <div className="errors-msg">
                  <ErrorMessage
                    name="position"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="field">
                  <div className="input-field">
                    <Field
                      type="file"
                      id="resume"
                      name="resume"
                      innerRef={fileInputRef}
                    />
                  </div>
                </div>
                <div className="errors-msg">
                  <ErrorMessage
                    name="resume"
                    component="div"
                    className="error"
                  />
                </div>
                <button type="submit">Submit</button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default JobOpenings;
