import { useEffect, useState } from 'react';
import Icon from '../Icon/Icon';
import styles from './header.module.css';

export default function UserInfo() {
  const [username, setUsername] = useState('');
  useEffect(() => {
    const storageValue = localStorage.getItem('username');
    if (storageValue) {
      setUsername(storageValue);
    }
  });
  // get info about username: username
  // more-info span - add arrow
  // get info about img
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userInfoAvatarContainer}>
        <img className={styles.userInfoAvatar} src="/svg/user.svg#user" alt="avatar" />
      </div>
      <p className={styles.username}>{username}</p>
      <div className={styles.arrow}></div>
    </div>
  );
}
