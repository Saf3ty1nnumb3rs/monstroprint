import React from 'react';
import { useHistory } from 'react-router-dom';
import 'scss/components/_MenuItem.scss';
import { SelectablePrimaryMenuItem } from 'library/types/BaseComponentTypes';

const MenuItem = ({
  title,
  subtitle,
  className = '',
  contentClass = '',
  imageUrl,
  link = '/',
}: SelectablePrimaryMenuItem): React.ReactElement => {
  const history = useHistory();

  const backgroundStyle = imageUrl
    ? { backgroundImage: `url(${imageUrl})` }
    : {};
  return (
    <div
      className={`menu-item ${className}`}
      onClick={() => history.push(link)}
    >
      <div className="background-image" style={backgroundStyle} />
      <div className={`content ${contentClass}`}>
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">{subtitle}</span>
      </div>
    </div>
  );
};

export default MenuItem;
