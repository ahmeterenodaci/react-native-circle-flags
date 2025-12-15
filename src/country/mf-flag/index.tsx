import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MfFlagSource = require('./mf.webp');

export default function MfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MfFlagSource} />;
}
