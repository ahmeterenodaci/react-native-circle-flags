import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BfFlagSource = require('./bf.webp');

export default function BfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BfFlagSource} />;
}
