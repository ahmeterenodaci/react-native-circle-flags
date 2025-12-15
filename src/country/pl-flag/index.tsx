import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PlFlagSource = require('./pl.webp');

export default function PlFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PlFlagSource} />;
}
