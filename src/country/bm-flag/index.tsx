import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BmFlagSource = require('./bm.webp');

export default function BmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BmFlagSource} />;
}
