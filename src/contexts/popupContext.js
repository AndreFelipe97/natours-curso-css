import { createContext, useContext, useState } from 'react';

const PopupContext = createContext({});

export function PopupProvider(props) {
  const [popup, setPopup] = useState(false);

  const popupOpen = async () => {
    setPopup(!popup);
  };

  return (
    <PopupContext.Provider
      value={{ popupOpen, popup }}
    >
      {props.children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);

  return context;
}