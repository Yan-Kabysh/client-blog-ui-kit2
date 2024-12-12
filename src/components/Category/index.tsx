import Body from '@components/Body';
import Heading from '@components/Heading';
import { isValidElement } from 'react';
import './index.scss';
import { CategoryProps } from './interfaces';

const Category = ({
  icon,
  title,
  text,
  type = 'primary',
  onClick,
  className,
}: CategoryProps) => {
  return (
    <div className={type + 'Category ' + className} onClick={onClick}>
      <div className="categoryIcon">
        {isValidElement(icon) ? icon : <img src={icon as string} alt="" />}
      </div>
      <Heading type="h3">{title}</Heading>
      {text && <Body className="categoryText">{text}</Body>}
    </div>
  );
};

export default Category;
