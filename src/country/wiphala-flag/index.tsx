import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const WiphalaFlagSource = require('./wiphala.webp');

export default function WiphalaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={WiphalaFlagSource} />;
}
