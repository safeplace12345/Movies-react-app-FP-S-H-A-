import { getData } from "../../services/getData";
const checkRef = (element, callBack) => {
  if (element && element.current) {
    return element.current.addEventListener("click", (e) => {
      e.preventDefault();
      getData.form(e, callBack);
    });
  }
};

export default checkRef;
