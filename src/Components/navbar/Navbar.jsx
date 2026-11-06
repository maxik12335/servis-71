// import { useEffect, useState } from "react";
import classes from "./Navbar.module.css"
import { useState } from "react";
import logoImg from '../../assets/logo.png'


// const Navbar = ({navColor, textColor}) => {
const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`${classes.navbar}`}>
      <div className="container-navbar">

        {/* ======= меню desctop ======= */}
        <div className={classes.desctopMenu}>
          {/* <img className={classes.logo} src={logo} alt="logo" /> */}
          <img className={classes.logo} src={logoImg} alt="main image" />

          <div className={classes.menu}>
            <a className="text-base hover"  href="#about">обо мне</a>
            <a className="text-base hover"  href="#price">прайс</a>
            <a className="text-base hover"  href="#feedbacks">отзывы</a>
          </div>
        </div>

        {/* ======= burger ======= */}
        <div className={classes.burgerBox}>
          <img className={classes.logo} src={logoImg} alt="main image" />
          <div className={classes.burger} onClick={() => setIsOpen(true)}>
            <span ></span>
            <span ></span>
            <span ></span>
          </div>
        </div>

        {/* ======= меню mobyle ======= */}
        <div className={`${classes.mobyleMenu} ${isOpen ? classes.isOpen : ''}`}>
          <div className={classes.top}>
            <p className="h3">Venefica</p>

            <div className={classes.close} onClick={() => setIsOpen(false)}>
              <span ></span>
              <span ></span>
            </div>
          </div>

          <div className={classes.menu}>
            <a 
              className={`${classes.link} text-base`}
              href="#uslugy"
              onClick={() => setIsOpen(false)}>обо мне</a>
            <a 
              className={`${classes.link} text-base`}              
              href="#price"
              onClick={() => setIsOpen(false)}>прайс</a>
            <a 
              className={`${classes.link} text-base`}              
              href="#feedbacks"
              onClick={() => setIsOpen(false)}>отзывы</a>
          </div>

          <img className={classes.logo} src={logoImg} alt="main image" />
        </div>

      </div>
    </div>
  )
}

export default Navbar;