import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { LoginBtn } from "../login.styled";
import { useSelector} from "react-redux"
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

function FormLogin() {
    const state = useSelector(state=>state.loginSlice.user)
    let auth = useAuth();
    let login = () => {
      localStorage.setItem("userAccepted","true")
      auth.signIn();
    };
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (!values.username) {
        errors.username = "Required";
      }
      else if (!values.password) {
        errors.password = "Required";
      }
      return errors;
    },
    onSubmit: (values) => {
      if (values.username === state.username && values.password === state.password) {
            // dispatch(setUserAccepted(true))
            // localStorage.setItem("isLogin",true)
            login()
      }
      else if (values.username !== state.username){
        toast.error(t("login.usernameWrong"), {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
      else if (values.password !== state.password){
        toast.error(t("login.passwordWrong"), {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
      }
    },
  });
  return (
    <>
      <h3>{t("login.login title")}</h3>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <input
            className="form-control mt-3"
            placeholder={t("login.username")}
            id="username"
            name="username"
            style={{fontFamily:"Roboto,sans-serif",fontWeight:400,borderStyle:"none"}}
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username && <div className="error text-danger">{formik.errors.username}</div>}
        </div>
        <div className="form-group mt-3">
          <input
            id="password"
            className="form-control w-100"
            style={{fontFamily:"Roboto,sans-serif",fontWeight:400,borderStyle:"none"}}
            placeholder={t("login.password")}
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
               {formik.errors.password && <div className="error text-danger">{formik.errors.password}</div>}
        </div>

        <LoginBtn type="submit">{t("login.sign in")}</LoginBtn>
      </form>
      
    </>
  );
}

export default FormLogin;
