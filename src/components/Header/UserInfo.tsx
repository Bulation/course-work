import { useRef } from 'react';
import useClickOutside from '../../hooks/useClickOutside';
import styles from './header.module.css';

export default function UserInfo() {
  const dropDownNode = useRef<HTMLDivElement>(null);
  const { isOpen, setIsOpen } = useClickOutside(dropDownNode, false);
  const name = localStorage.getItem('name');
  return (
    <div className={styles.userInfoContainer}>
      <div className={styles.userInfoAvatarContainer}>
        <img className={styles.userInfoAvatar} src="/svg/user.svg#user" alt="avatar" />
      </div>
      <p className={styles.username}>{name}</p>
      <div ref={dropDownNode} className={styles.arrow} onClick={() => setIsOpen((value) => !value)}>
        {isOpen && (
          <div
            className={styles.userDropDownItem}
            onClick={() => {
              localStorage.setItem('isLogout', 'true');
              window.location.reload();
            }}
          >
            Выход
          </div>
        )}
      </div>
    </div>
  );
}
