import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SdFlagSource = require('./sd.webp');

export default function SdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SdFlagSource} />;
}
