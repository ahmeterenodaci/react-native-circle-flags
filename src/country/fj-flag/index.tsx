import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FjFlagSource = require('./fj.webp');

export default function FjFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={FjFlagSource} />;
}
