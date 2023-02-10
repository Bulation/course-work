import { NavLink } from 'react-router-dom';
import { LinkType } from '../../types/LinkType';
import Icon from '../Icon/Icon';

interface INavigationProps {
  links: LinkType[];
  styles: {
    navigationLink: string;
    navigationList: string;
    navigationItem: string;
    navigationSvg?: string;
    active?: string;
  };
}

export default function Navigation(props: INavigationProps) {
  const { links, styles } = props;
  const setActive: //function for styling active link
  ((props: { isActive: boolean; isPending: boolean }) => string | undefined) | undefined = ({
    isActive,
  }) => (isActive ? `${styles.active} ${styles.navigationLink}` : styles.navigationLink);
  return (
    <nav>
      <ul className={styles.navigationList}>
        {links.map((link) => {
          return (
            <li className={styles.navigationItem} key={link.content}>
              <NavLink className={setActive} to={link.address}>
                {link.svgId && styles.navigationSvg && (
                  <Icon id={link.svgId} className={styles.navigationSvg}></Icon>
                )}
                {link.content}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
