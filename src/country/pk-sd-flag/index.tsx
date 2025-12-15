import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PkSdFlagSource = require('./pk-sd.webp');

export default function PkSdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PkSdFlagSource} />;
}
