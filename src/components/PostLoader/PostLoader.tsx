import ContentLoader from 'react-content-loader';

export default function PostLoader() {
  return (
    <ContentLoader
      speed={2}
      width={900}
      height={510}
      viewBox="0 0 900 510"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="7" y="35" rx="3" ry="3" width="141" height="14" />
      <rect x="8" y="301" rx="3" ry="3" width="845" height="34" />
      <rect x="-11" y="94" rx="3" ry="3" width="845" height="191" />
      <rect x="6" y="8" rx="3" ry="3" width="800" height="13" />
      <rect x="500" y="41" rx="0" ry="0" width="42" height="11" />
      <circle cx="568" cy="45" r="9" />
      <circle cx="601" cy="45" r="9" />
      <circle cx="634" cy="45" r="9" />
      <circle cx="667" cy="45" r="9" />
      <circle cx="700" cy="45" r="9" />
      <rect x="7" y="347" rx="0" ry="0" width="845" height="33" />
      <rect x="7" y="392" rx="0" ry="0" width="845" height="29" />
      <rect x="7" y="433" rx="0" ry="0" width="845" height="29" />
      <rect x="8" y="472" rx="0" ry="0" width="845" height="30" />
    </ContentLoader>
  );
}
