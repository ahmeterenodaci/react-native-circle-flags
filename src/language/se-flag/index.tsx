import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SeFlagSource = require('./se.webp');

export default function SeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SeFlagSource} />;
}
