import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HoFlagSource = require('./ho.webp');

export default function HoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HoFlagSource} />;
}
