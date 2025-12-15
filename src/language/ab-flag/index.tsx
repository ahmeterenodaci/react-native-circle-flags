import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AbFlagSource = require('./ab.webp');

export default function AbFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AbFlagSource} />;
}
