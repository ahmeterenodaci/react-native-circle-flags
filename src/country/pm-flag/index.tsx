import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PmFlagSource = require('./pm.webp');

export default function PmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PmFlagSource} />;
}
