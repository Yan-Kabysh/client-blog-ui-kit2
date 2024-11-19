"use client";
import { icons } from './config';
import { IconProps } from './interfaces';

const Icon = ({ name, size = 16, fill = 'currentColor' }: IconProps) => { 
    const IconComponent = icons[name]; 
  
    console.log('icons:', icons); // Проверьте, что объект icons корректен
    console.log('name:', name); // Проверьте имя
    console.log('IconComponent:', IconComponent); // Должен содержать компонент
  
    if (!IconComponent) { 
      console.error(`Icon "${name}" not found in icons object`); 
      return null; 
    } 
  
    return <IconComponent width={size} height={size} fill={fill} />;
  }; 
  export default Icon;
  