import React from 'react'
import PropTypes from 'prop-types'
import Welcome from '../Welcome/Welcome';
import styles from './owneruser.module.css';
import image from './userowner.png';
import owner from './owner.png';
import renter from './renter.png';
import { Link } from 'react-router-dom';



const UserOwner = () => {
  
  
  return (
    <div className={styles['container']}>
      <Welcome/>
      <div className={styles['component1']}>
        <Link to="/Signup/renter" className={styles['user']}>
          <span className={styles['text']}>I am a renter</span>
          <img
            alt="man10111"
            src={renter}
            className={styles['man1']}
          />
        </Link>
        <Link to="/Signup/owner" className={styles['owner']}>
          <span className={styles['text1']}>
            <span>I am an Owner</span>
          </span>
          <img
            alt="broker10107"
            src={owner}
            className={styles['broker1']}
          />
        </Link>
      </div>
     
    </div>
  )
}

Welcome.defaultProps = {
    iMAGESrc:
      image ,
    iMAGEAlt: 'IMAGE',
  }
  
  Welcome.propTypes = {
    iMAGESrc: PropTypes.string,
    iMAGEAlt: PropTypes.string,
  }

export default UserOwner;
