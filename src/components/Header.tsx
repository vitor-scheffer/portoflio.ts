import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

export function Layout() {
  const { t } = useTranslation();

  return (
    <>
      <header>
        <div>
          <Link className="title" to={"home"}>
            {"<vitor"}
            <span>{"Scheffer>"}</span>
          </Link>
        </div>
        <div>
          <nav>
            <ul>
              <Link className="title" to={"home"}>
                {t("Home.title")}
              </Link>
              <Link className="title" to={"about"}>
                {t("About.title")}
              </Link>
              <Link className="title" to={"experience"}>
                {t("Experience.title")}
              </Link>
              <Link className="title" to={"contact"}>
                {t("Contact.title")}
              </Link>
            </ul>
          </nav>
          <button>PT</button>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
