import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
import ReadMore from '../../components/ReadMore/ReadMore';

export default function PostPage() {
  return (
    <>
      <Header />
      <main>
        <Post />
        <ReadMore />
      </main>
      <Footer />
    </>
  );
}
