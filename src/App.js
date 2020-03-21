import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import { languageMap } from './locales';

function App() {
  const { t, i18n } = useTranslation();

  return (
    <div className="App">
      <h1>{t('Change to the language to you want')}</h1>
      <select
        onChange={e => {
          i18n.changeLanguage(e.target.value);
        }}
      >
        {languageMap.map(item => {
          return (
            <option key={item.key} value={item.key}>
              {item.name}
            </option>
          );
        })}
      </select>
      <h1> {t('hello world')} !</h1>
    </div>
  );
}

export default App;
