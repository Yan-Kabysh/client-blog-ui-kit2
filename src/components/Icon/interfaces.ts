import { icons } from "./config";

export type IconName = keyof typeof icons;

export interface IconProps {
  name: IconName;
  size?: number;
  fill?: string
}