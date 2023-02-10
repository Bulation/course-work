import { Link } from 'react-router-dom';
import { proposalsList, cities, flats } from '../../data/data';
import Icon from '../Icon/Icon';
import styles from './proposals.module.css';

export default function Proposals() {
  return (
    <section className={styles.proposalsSection}>
      <div className={styles.proposalsContainer}>
        <div className={styles.proposalsList}>
          {proposalsList.map((proposal, i) => (
            <div key={i} className={styles.proposal}>
              <img className={styles.proposalImg} src={proposal.imgPath} alt="" />
              <p className={styles.proposalSubtitle}>{proposal.subtitle}</p>
              <h2 className={styles.proposalTitle}>{proposal.title}</h2>
              {proposal.chips && (
                <div className={styles.chips}>
                  {cities.map((city) => (
                    <Link to={`/catalog?city=${city}`} key={city} className={styles.chip}>
                      {city}
                    </Link>
                  ))}
                </div>
              )}
              {proposal.more && (
                <Link to="/catalog" className={styles.proposalMore}>
                  <Icon id="#arrowRightWhite" className={styles.proposalSvg} />
                </Link>
              )}
            </div>
          ))}
        </div>
        <aside>
          {flats.map((flat, i) => (
            <div key={i} className={styles.flats}>
              <h3 className={styles.flatsTitle}>{flat.title}</h3>
              <ul className={styles.flatsList}>
                {flat.flatsList.map((flat) => (
                  <li key={flat.content} className={styles.flatsListItem}>
                    <Link
                      className={`${styles.flatsListLink} ${flat.more && styles.flatsListLinkMore}`}
                      to={flat.address}
                    >
                      {flat.content}
                      {flat.more && <Icon id="#arrowDown" className={styles.linkSvg}></Icon>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
