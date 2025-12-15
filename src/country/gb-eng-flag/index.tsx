import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GbEngFlagSource = require('./gb-eng.webp');

export default function GbEngFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GbEngFlagSource} />;
}
