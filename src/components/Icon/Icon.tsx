import { SITE_URL } from '../../constants/constants';

interface IIcon {
  id: string;
  className: string;
}

export default function Icon(props: IIcon) {
  const { id, className } = props;
  return (
    <svg className={className}>
      <use href={`${SITE_URL}svg/sprite.svg${id}`} />
    </svg>
  );
}
