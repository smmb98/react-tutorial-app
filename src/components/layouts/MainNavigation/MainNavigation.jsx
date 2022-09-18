import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import styles from "./MainNavigation.module.css";

const MainNavigation = () => (
  <header className={styles.header}>
    <div className={styles.logo}>React Meetups</div>
    <nav>
      <ul>
        <li>
          <Link to="/">All Meetups</Link>
        </li>
        <li>
          <Link to="/new-meetup">Add new Meetup</Link>
        </li>
        <li>
          <Link to="/favorites">My Favorites</Link>
        </li>
      </ul>
    </nav>
  </header>
);

MainNavigation.propTypes = {};

MainNavigation.defaultProps = {};

export default MainNavigation;
