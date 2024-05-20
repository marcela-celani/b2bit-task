import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { goToProfile } from "../routes/Coordinator";
import React, { useState } from "react";
import { FormikErrors, useFormik } from "formik";
import { login } from "../services/APIService";
import { LoginValues } from "../models/types";


const validate = (values: LoginValues) => {
  const errors: FormikErrors<LoginValues> = {};
  if (!values.email) {
    errors.email = "Campo obrigatório";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Formato de e-mail inválido";
  }
  if (!values.password) {
    errors.password = "Campo obrigatório";
  } else if (values.password.length < 8) {
    errors.password = "Deve possuir 8 ou mais caracteres";
  }
  return errors;
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values) => {
      login(values)
        .then(() => {
          goToProfile(navigate);
        })
        .catch((err) => {
          setErrorMessage(err);
        });
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (errorMessage) {
      setErrorMessage("");
    }
    formik.handleChange(e);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <main className="bg-white w-438 h-534 flex flex-col justify-center items-center shadow-xl rounded-3xl p-1">
        <figure className="flex justify-center mt-8">
          <img className="h-28" src={logo} alt="logo" />
        </figure>
        <section className="w-full p-7">
          <form onSubmit={formik.handleSubmit}>
            <div className="pb-6">
              <h3 className="block text-gray-700 text-lg font-bold mb-1">
                E-mail
              </h3>
              <input
                type="email"
                name="email"
                value={formik.values.email}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                placeholder="@gmail.com"
                className="w-full h-14 px-6 bg-gray-light rounded-lg text-base"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red text-m italic">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            <div className="pb-6">
              <label
                htmlFor="password"
                className="block text-gray-700 text-lg font-bold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                placeholder="*************"
                className="w-full h-14 px-6 bg-gray-light rounded-lg text-base"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red text-m italic">
                  {formik.errors.password}
                </p>
              ) : null}
            </div>
            <p className="text-red pb-2 flex justify-center text-m italic">
              {errorMessage}
            </p>
            <button
              type="submit"
              className="w-full h-14  bg-blue p-4 mb-6 rounded-lg text-light font-bold text-xl"
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
