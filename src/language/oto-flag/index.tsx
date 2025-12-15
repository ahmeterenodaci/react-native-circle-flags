import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OtoFlagSource = require('./oto.webp');

export default function OtoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={OtoFlagSource} />;
}
