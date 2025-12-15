import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SealandFlagSource = require('./sealand.webp');

export default function SealandFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SealandFlagSource} />;
}
