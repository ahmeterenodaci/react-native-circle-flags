import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsGaFlagSource = require('./us-ga.webp');

export default function UsGaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsGaFlagSource} />;
}
