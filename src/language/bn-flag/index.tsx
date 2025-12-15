import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BnFlagSource = require('./bn.webp');

export default function BnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BnFlagSource} />;
}
