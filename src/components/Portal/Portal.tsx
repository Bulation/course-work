import { useEffect } from 'react';
import ReactDOM from 'react-dom';

export default function Portal(props: { children: React.ReactNode }) {
  const el = document.createElement('div');
  useEffect(() => {
    document.body.append(el);
    return () => {
      el.remove();
    };
  }, [el]);
  return ReactDOM.createPortal(props.children, el);
}
