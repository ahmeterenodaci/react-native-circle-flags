import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GsFlagSource = require('./gs.webp');

export default function GsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={GsFlagSource} />;
}
