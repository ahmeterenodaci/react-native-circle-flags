import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BdFlagSource = require('./bd.webp');

export default function BdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BdFlagSource} />;
}
