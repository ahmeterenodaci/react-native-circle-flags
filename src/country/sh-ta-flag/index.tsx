import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ShTaFlagSource = require('./sh-ta.webp');

export default function ShTaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ShTaFlagSource} />;
}
