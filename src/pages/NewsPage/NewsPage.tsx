import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import NewsList from '../../components/NewsList/NewsList';

const breadcrumbsList = [
  {
    current: true,
    content: 'Новости',
  },
];

export default function NewsPage() {
  return (
    <>
      <Header />
      <main>
        <Breadcrumbs breadcrumbsList={breadcrumbsList} />
        <NewsList />
      </main>
      <Footer />
    </>
  );
}
