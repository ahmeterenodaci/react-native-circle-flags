import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OlympicsFlagSource = require('./olympics.webp');

export default function OlympicsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={OlympicsFlagSource} />;
}
