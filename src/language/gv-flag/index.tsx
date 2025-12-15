import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GvFlagSource = require('./gv.webp');

export default function GvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GvFlagSource} />;
}
