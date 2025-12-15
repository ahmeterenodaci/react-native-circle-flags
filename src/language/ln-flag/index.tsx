import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LnFlagSource = require('./ln.webp');

export default function LnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LnFlagSource} />;
}
