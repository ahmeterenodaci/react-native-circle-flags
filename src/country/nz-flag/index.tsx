import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NzFlagSource = require('./nz.webp');

export default function NzFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NzFlagSource} />;
}
