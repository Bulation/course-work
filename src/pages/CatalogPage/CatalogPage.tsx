import FastFilter from '../../components/FastFilter/FastFilter';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import styles from './catalogpage.module.css';
import FlatsPresentation from '../../components/FlatsPresentation/FlatsPresentation';
import Filter from '../../components/Filter/Filter';
import CatalogSettings from '../../components/CatalogSettings/CatalogSettings';
import FlatsList from '../../components/FlatsList/FlatsList';

export default function CatalogPage() {
  return (
    <>
      <Header />
      <main>
        <section className={styles.filtersSection}>
          <FastFilter />
          <Filter />
        </section>
        <CatalogSettings />
        <FlatsList />
        <section className={styles.searchFlatsSection}>
          <div className={styles.searchFlatsContainer}>
            <FlatsPresentation
              title="Показать найденные квартиры на карте"
              description="Ищите новостройки рядом с работой,
парком или родственниками"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
