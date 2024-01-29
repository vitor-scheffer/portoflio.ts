import { useTranslation } from "react-i18next";
import "./Home.css";
import { useUser } from "../../api";

export function Home() {
  const { t } = useTranslation();
  const userData = useUser();

  return (
    <div id="home">
      <div>
        <h1 className="title">{t("Home.myName", { name: userData.name })}</h1>
        <p></p>
        <button className="button-primary">
          <i></i>
          Baixar CV
        </button>
      </div>
      <div>
        <div>
          <i></i>
          <i></i>
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
}
