import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HaFlagSource = require('./ha.webp');

export default function HaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HaFlagSource} />;
}
