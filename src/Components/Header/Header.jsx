import React, { useContext } from "react";
import classes from "../Header/Header.module.css";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import classes1 from "../Carouosel/Carouosle.module.css";
import { DataContext } from "../DataProvider/DataProvider";
import { auth } from "../Utility/firebase";

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/*logo*/}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon logo"
              />
            </Link>
            <div className={classes.delivery}>
              <span>
                {/* {icon} */}
                <MdLocationPin />
              </span>
              <div>
                <div>Delivered to </div>
                <span>Seattle</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/*search*/}
            <select id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <IoIosSearch size={38} />
          </div>
          <div className={classes.order__container}>
            <a href="" className={classes.language}>
              {/* {right side link} */}
              <img
                src="https://freesvg.org/img/Flag_of_the_United_States.png"
                alt=""
              />
              <select>
                <option value="">EN</option>
              </select>
            </a>
            {/* three components */}
            <Link to={!user && "/signup"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign Out</span>
                  </>
                ) : (
                  <>
                    <p>Hello, Sign in </p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* orders */}
            <Link to="/orders">
              <p>returns </p>
              <span>& Orders</span>
            </Link>
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />

              <span>{basket.length}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </section>
  );
}

export default Header;
