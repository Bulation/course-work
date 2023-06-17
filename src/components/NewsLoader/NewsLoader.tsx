import ContentLoader from 'react-content-loader';

export default function NewsLoader() {
  return (
    <ContentLoader
      speed={2}
      width={404}
      height={510}
      viewBox="0 0 404 510"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="13" y="374" rx="3" ry="3" width="88" height="14" />
      <rect x="12" y="302" rx="3" ry="3" width="385" height="44" />
      <rect x="-13" y="145" rx="3" ry="3" width="404" height="6" />
      <rect x="-4" y="195" rx="3" ry="3" width="380" height="6" />
      <rect x="12" y="261" rx="3" ry="3" width="388" height="13" />
      <rect x="4" y="10" rx="21" ry="21" width="404" height="226" />
      <rect x="327" y="375" rx="20" ry="20" width="69" height="14" />
    </ContentLoader>
  );
}
