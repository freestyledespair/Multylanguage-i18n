import React from 'react';
import { useTranslation } from 'react-i18next';
import "./App.css"

const App = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="ru">RU</option>
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    <div className="menu">
      <h3>{t("header.link1")}</h3>
      <h3>{t("header.link2")}</h3>
      <h3>{t("header.link3")}</h3>
      <h3>{t("header.link4")}</h3>
      <h3>{t("header.link5")}</h3>
      <h3>{t("header.link6")}</h3>
      <h3>{t("header.link7")}</h3>
    </div>
      <p>{t("text")}</p>
      </> 
  );
};

export default App;