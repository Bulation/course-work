import Header from '../../components/Header/Header';
import styles from './homepage.module.css';
import { presentationData } from '../../data/data';
import Footer from '../../components/Footer/Footer';
import HomeFilter from '../../components/HomeFilter/HomeFilter';
import FlatsPresentation from '../../components/FlatsPresentation/FlatsPresentation';
import FlatForDay from '../../components/FlatForDay/FlatForDay';
import AsideNews from '../../components/AsideNews/AsideNews';
import Proposals from '../../components/Proposals/Proposals';
import FlatsSlider from '../../components/FlatsSlider/FlatsSlider';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeFilter />
        <Proposals />
        <FlatsSlider />
        <section className={styles.searchFlatsSection}>
          <div className={styles.searchFlatsContainer}>
            <FlatsPresentation
              title="Поиск квартир на карте"
              description="Ищите квартиры на сутки в центре города, возле парка или в живописном районе"
              presentationData={presentationData}
            />
          </div>
        </section>
        <section className={styles.flatForDaySection}>
          <div className={styles.flatForDayContainer}>
            <FlatForDay />
            <AsideNews />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
