import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import styles from './breadcrumbs.module.css';

type BreadcrumbLink = {
  current: boolean;
  content: string;
  address?: string;
};

interface IBreadcrumbsProps {
  breadcrumbsList: BreadcrumbLink[];
}

export default function Breadcrumbs({ breadcrumbsList }: IBreadcrumbsProps) {
  let links;
  if (breadcrumbsList.length === 1) {
    links = (
      <>
        <span className={styles.dot}></span> <p>{breadcrumbsList[0].content}</p>
      </>
    );
  } else {
    links = breadcrumbsList.map((link, i) => {
      if (link.current) {
        return (
          <p className={styles.breadcrumbCurrent} key={i}>
            {link.content}
          </p>
        );
      } else {
        return (
          <Fragment key={i}>
            <Link className={styles.breadcrumbLink} to={link.address ? link.address : ''}>
              {link.content}
            </Link>{' '}
            <span className={styles.dot}></span>
          </Fragment>
        );
      }
    });
  }
  return (
    <div className={styles.container}>
      <Link to="/">
        <Icon id="#home" className={styles.breadcrumbSvg} />
      </Link>
      {links}
    </div>
  );
}
