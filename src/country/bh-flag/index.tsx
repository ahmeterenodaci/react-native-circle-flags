import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BhFlagSource = require('./bh.webp');

export default function BhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BhFlagSource} />;
}
