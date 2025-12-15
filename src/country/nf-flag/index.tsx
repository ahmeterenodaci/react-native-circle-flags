import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NfFlagSource = require('./nf.webp');

export default function NfFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NfFlagSource} />;
}
