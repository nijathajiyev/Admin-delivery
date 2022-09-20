import {
  DropdownBtn,
  DropdownItemComp,
  DropdownLangLogin,
  LeftForm,
  Logindiv,
  LoginForm,
  LogoDiv,
  RightForm,
} from "./login.styled";
import RightFormImg from "../../assets/login/loginRightForm.svg";
import FormLogin from "./form/FormLogin";
import { DropdownToggle } from "reactstrap";
import { useState } from "react";
import az from "../../assets/Header/az.svg";
import en from "../../assets/Header/en.svg";
import fr from "../../assets/Header/fr.svg";

import { useTranslation } from "react-i18next";
import { ToastContainer } from "react-toastify";

const lngs = {
  en: { nativaName: "English" },
  az: { nativaName: "Azerbarjan" },
  fr: { nativaName: "France" },
};
const flags = {
  az,
  en,
  fr,
};
function Login() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prevState) => !prevState);
  return (
    <Logindiv>
      <LogoDiv>
        <p>Foody</p>
        <span>.</span>
      </LogoDiv>

      <LoginForm>
        <LeftForm>
          <FormLogin />
        </LeftForm>
        <RightForm>
          <DropdownBtn isOpen={isOpen} toggle={toggle}>
            <DropdownToggle>
              <img
                src={flags[i18n.resolvedLanguage]}
                alt={flags[i18n.resolvedLanguage]}
              />
            </DropdownToggle>
            <DropdownLangLogin>
              {Object.keys(lngs).map((lng) => (
                <DropdownItemComp
                  type="submit"
                  key={lng}
                  onClick={() => i18n.changeLanguage(lng)}
                  disabled={i18n.resolvedLanguage === lng}
                >
                  <img src={flags[lng]} alt={flags[lng]} />
                </DropdownItemComp>
              ))}
            </DropdownLangLogin>
          </DropdownBtn>
          <img src={RightFormImg} alt={RightFormImg} />
        </RightForm>
      </LoginForm>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Logindiv>
  );
}

export default Login;
