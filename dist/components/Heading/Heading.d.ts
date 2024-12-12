import { HeadingProps } from './interfaces';
import './Heading.scss';
declare const Heading: ({
  type,
  children,
  className,
  onClick,
}: HeadingProps) => import('react').DetailedReactHTMLElement<
  {
    className: string;
    onClick: (() => void) | undefined;
  },
  HTMLElement
>;
export default Heading;
