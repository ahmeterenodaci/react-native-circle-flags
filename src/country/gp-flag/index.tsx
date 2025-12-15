import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GpFlagSource = require('./gp.webp');

export default function GpFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GpFlagSource} />;
}
