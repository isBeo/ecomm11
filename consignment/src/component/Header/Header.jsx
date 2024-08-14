import React from "react";

// import of components
import style from "./header.module.css";
import Search from "../Search/Search";

// state management
import { useState } from "react";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import MobilNav from "../MobilNav/MobilNav";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isclose, setisClose] = useState(false);

  const toggleMenu = () => {
    setIsOpen((c) => {
      return (c = !isOpen);
    });
  };

  const toggleCloseMenu = () => {};

  return (
    <div className={style.header}>
      <div className={style.wrapper}>
        {/* h1 and home Icon */}
        <div className={style.h1}>
          <FontAwesomeIcon className={style.homeIcon} icon={faHouse} />
          <h1>BellaHerbs</h1>
        </div>

        <div className={style.right}>
          {/* sign in avatar */}
          <FontAwesomeIcon className={style.avatar} icon={faUser} />

          {/* cart icon */}
          <FontAwesomeIcon className={style.carticon} icon={faCartShopping} />

          {isOpen ? (
            <button className={style.close} onClick={() => toggleMenu()}>X</button>
          ) : (
            <FontAwesomeIcon
              onClick={() => toggleMenu()}
              className={style.menu}
              icon={faBars}
            />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className={style.mMenu}>
          <MobilNav />
        </div>
      )}

      {isOpen ? (
        ""
      ) : (
        <div className={style.search}>
          <Search
            className={style.component}
            placeHolder="Search for anything"
          />
        </div>
      )}
    </div>
  );
};

export default Header;
