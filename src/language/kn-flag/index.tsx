import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KnFlagSource = require('./kn.webp');

export default function KnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KnFlagSource} />;
}
