"use client";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@/app/theme";
import { useState, useEffect } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

function Contact() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [countryCode, setCountryCode] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    code: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  /* const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData); // Aquí puedes hacer lo que necesites con los datos del formulario
  }; */

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setNotification({
          message: "Message sent successfully",
          type: "success",
        });
        setFormData({
          name: "",
          lastName: "",
          email: "",
          code: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setNotification({
          message: response.message,
          type: "error",
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null); // Ocultar la notificación después de 5 segundos (5000 milisegundos)
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]); // Dependencia para el useEffect

  useEffect(() => {
    const fetchCountryCode = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const countries = await response.json();
        const listCountries = countries.map((country) => ({
          name: country.name.common,
          idd: country.idd
            ? Array.isArray(country.idd.suffixes) &&
              country.idd.suffixes.length > 0
              ? country.idd.suffixes.length > 1
                ? country.idd.root
                : `${country.idd.root}${country.idd.suffixes[0]}`
              : country.idd.root
            : "+",
          flags: country.flags.svg,
        }));
        setCountryCode(listCountries);
      } catch (error) {
        console.error("Error fetching country code:", error);
        setCountryCode([]);
      }
    };

    fetchCountryCode();
  }, []);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const handleCountrySelection = (country) => {
    setSelectedCountry(country);
    setFormData((prevState) => ({
      ...prevState,
      code: country.idd,
    }));
    setMenuAbierto(false); // Cerrar el menú desplegable después de seleccionar un país
  };

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{ color: theme.palette.secondary.main }}
        className="grid grid-cols-1 place-items-center gap-y-5 w-10/12 2xl:w-6/12 xl:w-7/12 lg:w-8/12 md:w-9/12 sm:w-10/12"
      >
        <h1 className="text-3xl text-center font-serif 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl tracking-widest">
          CONTACT ME
        </h1>

        <form
          id="contactForm"
          className="border border-[#00DDFF] p-4 rounded-3xl w-full space-y-1 shadow-md shadow-[#00DDFF]"
          onSubmit={handleSubmit}
        >
          {notification && (
            <div className="fixed bottom-4 left-4 z-50">
              <Alert
                icon={
                  notification.type === "success" ? (
                    <CheckIcon fontSize="inherit" />
                  ) : null
                }
                severity={notification.type}
              >
                {notification.message}
              </Alert>
            </div>
          )}
          <div className="grid gap-x-5 gap-y-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div className="col-span-1">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm border rounded-e-0 border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="rounded-none rounded-e-lg border block flex-1 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Juan"
                  required
                />
              </div>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Last Name
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm border rounded-e-0 border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="rounded-none rounded-e-lg border block flex-1 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Perez"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-x-5 gap-y-1 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Email
              </label>
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm border rounded-e-0 border-e-0 rounded-s-md bg-gray-600 text-gray-400 border-gray-600">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                  >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="rounded-none rounded-e-lg border block flex-1 min-w-0 w-full text-sm p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="example@mail.com"
                  /* pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}" */
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="relative">
              <label
                htmlFor="lastName"
                className="block mb-2 text-sm font-medium text-white"
              >
                Phone Number
              </label>
              <div className="flex items-center">
                <button
                  id="dropdown-phone-button"
                  name="code"
                  data-dropdown-toggle="dropdown-phone"
                  className="inline-flex items-center py-2.5 px-1.5 text-sm font-medium text-center border rounded-s-lg focus:ring-4 focus:outline-none bg-gray-700 hover:bg-gray-600 focus:ring-gray-700 text-white border-gray-600 w-auto"
                  type="button"
                  onClick={toggleMenu}
                >
                  {selectedCountry ? (
                    <span className="flex me-2.5">
                      <img
                        src={selectedCountry.flags}
                        alt={selectedCountry.name}
                        className="w-4 h-4 me-1"
                      />
                      ({selectedCountry.idd})
                    </span>
                  ) : (
                    "(+)"
                  )}
                </button>
                {menuAbierto && (
                  <div
                    id="dropdown-phone"
                    className="absolute z-10 divide-y divide-gray-100 rounded-lg shadow w-auto max-h-52 bg-gray-700 overflow-y-auto border border-[#00DDFF]"
                    style={{
                      scrollbarWidth: "thin",
                      scrollbarColor: "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <ul
                      className="py-2 text-sm text-gray-200"
                      aria-labelledby="dropdown-phone-button"
                    >
                      {countryCode.map((country) => (
                        <li key={country.name}>
                          <button
                            type="button"
                            className="inline-flex w-full px-4 py-2 text-sm text-gray-200 hover:bg-gray-600 hover:text-white"
                            role="menuitem"
                            onClick={() => handleCountrySelection(country)}
                          >
                            <span className="inline-flex items-center">
                              <img
                                src={country.flags}
                                alt={country.name}
                                className="w-4 h-4 me-2"
                              />
                              {country.name} ({country.idd})
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <label
                  htmlFor="phone"
                  className="mb-2 text-sm font-medium sr-only text-white"
                >
                  Phone number:
                </label>
                <div className="w-full">
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="block p-2.5 w-full text-sm rounded-e-lg border-s-0 border focus:ring-blue-500 bg-gray-700 border-s-gray-700  border-gray-600 placeholder-gray-400 text-white focus:border-blue-500"
                    /* pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" */
                    pattern="[0-9]{10}"
                    placeholder="123-456-7890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-white"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="block w-full p-2 border rounded-lg text-xs bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Subject of your message"
              required
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              className="block p-2.5 w-full text-sm rounded-lg border bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 overflow-auto"
              placeholder="Write your message here..."
              style={{
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(0, 0, 0, 0.2) rgba(0, 0, 0, 0.1)",
              }}
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              style={{ backgroundColor: theme.palette.secondary.main }}
              className="block w-full mt-2 p-2.5 text-sm rounded-lg border border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 font-serif tracking-widest font-extrabold"
            >
              SEND
            </button>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
}

export default Contact;
