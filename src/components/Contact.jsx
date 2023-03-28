import React from "react";
import Container from "react-bootstrap/Container";
import "../styles/contact.css";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect, useRef } from "react";
import validator from "validator";
import Nav from "react-bootstrap/Nav";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [text, setText] = useState("");
  const [firstName, setFirstName] = useState(true);
  const [firstMail, setFirstMail] = useState(true);
  const [firstText, setFirstText] = useState(true);
  const form = useRef();

  const [errorName, setErrorName] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [errorMsj, setErrorMsj] = useState("");

  let patron = /\w+\s\w+\s?.+/;
  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 3, max: 30 })
    );
  };

  const validateMail = (m = "prueba@gmail") => {
    return (
      validator.isLength(m, { min: 10, max: 60 }) &&
      validator.isEmail(m, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
    );
  };

  const validateText = (t = "hol") => {
    return patron.test(t) && validator.isLength(t, { min: 5, max: 600 });
  };

  const loadErrors = () => {
    // ERROR NOMBRE
    if (!validateName(name)) {
      //Si hay error en el nombre, me fijo cual error es
      !validator.matches(name, "^[a-zA-Z ]*$")
        ? setErrorName("Your message must contain characters from the A-Z.")
        : setErrorName("The name must contain between 3 and 30 characters.");
    }

    // ERROR EMAIL
    if (!validateMail(mail)) {
      !validator.isEmail(mail, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
        ? setErrorMail("invalid email")
        : setErrorMail("The email must contain between 10 and 60 characters.");
    }
    // ERROR MENSAJE
    if (!validateText(text)) {
      !validator.isLength(text, { min: 10, max: 600 })
        ? setErrorMsj(
            "Your message must contain between 10 and 600 characters."
          )
        : setErrorMsj(
            "Your message must contain characters from A-Z, numbers and punctuation marks if you wish."
          );
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validateName(name) && validateMail(mail) && validateText(text)) {
      emailjs.sendForm(
        "service_6te7sr6",
        "template_x3rxlzp",
        form.current,
        "ugkrjxlh9YCbw85u7"
      );
      Swal.fire({
        title: "Excellent",
        text: "Your message has been sent!",
        icon: "success",
        iconColor: "#413f4a",
        width: "20rem",
        confirmButtonColor: "#413f4a",
        background: "#151515",
        color: "#fff",
      });
      setName("");
      setMail("");
      setText("");
      setFirstName(true);
      setFirstMail(true);
      setFirstText(true);
    } else {
      loadErrors();
      setFirstName(false);
      setFirstMail(false);
      setFirstText(false);
    }
  };

  useEffect(() => {}, [name, lastname, mail, text]);

  return (
    <Container id="Contact" className="ContainerContact">
      <h2>Contact</h2>
      <div className="linkedinContainer">
        <h3 className="p-2 d-flex">You can contact me through </h3>
        <h3>
          <Nav.Link
            href="https://www.linkedin.com/in/angeleduardosalva"
            target={"_blank"}
            className="d-flex px-2 pb-1"
          >
            Linked
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
        </h3>
        <h3 className="px-2">if you want or you can send me a message</h3>
      </div>
      <div className="FormContainer">
        <Form ref={form} id="formulario">
          <Row className="my-2">
            <Form.Group
              as={Col}
              className="mb-3 col-12 col-lg-6"
              controlId="formNombre"
            >
              <Form.Label>
                Name
                {!validateName(name) && !firstName && (
                  <span className="text-danger ms-3">{errorName}</span>
                )}
              </Form.Label>
              <Form.Control
                as="input"
                type="text"
                placeholder="Enter your name"
                onInput={(e) => setName(e.target.value)}
                name="name"
                value={name}
              />
            </Form.Group>
            <Form.Group
              as={Col}
              className="mb-3 col-12 col-lg-6"
              controlId="formEmail"
            >
              <Form.Label>
                Email address
                {!validateMail(mail) && !firstMail && (
                  <span className="text-danger ms-3">{errorMail}</span>
                )}
              </Form.Label>
              <Form.Control
                as="input"
                type="email"
                placeholder="Enter your email"
                onInput={(e) => setMail(e.target.value)}
                name="mail"
                value={mail}
              />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group
              as={Col}
              className="mb-3 col-12"
              controlId="formComment"
            >
              <Form.Label>
                Your Message
                {!validateText(text) && !firstText && (
                  <span className="text-danger ms-3">{errorMsj}</span>
                )}{" "}
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message must contain characters from the A-Z, numbers and punctuation marks if you wish."
                onInput={(e) => setText(e.target.value)}
                name="text"
                value={text}
              />
            </Form.Group>
          </Row>
        </Form>
        <div className="SubmitButton my-3">
          <Nav.Link onClick={handleClick}>Submit</Nav.Link>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
