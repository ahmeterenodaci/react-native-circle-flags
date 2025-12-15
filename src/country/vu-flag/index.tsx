import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VuFlagSource = require('./vu.webp');

export default function VuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={VuFlagSource} />;
}
