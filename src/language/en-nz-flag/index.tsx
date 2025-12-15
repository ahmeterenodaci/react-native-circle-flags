import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnNzFlagSource = require('./en-nz.webp');

export default function EnNzFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnNzFlagSource} />;
}
