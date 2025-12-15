import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VgFlagSource = require('./vg.webp');

export default function VgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={VgFlagSource} />;
}
