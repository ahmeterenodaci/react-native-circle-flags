import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CnXzFlagSource = require('./cn-xz.webp');

export default function CnXzFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CnXzFlagSource} />;
}
