import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RoFlagSource = require('./ro.webp');

export default function RoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RoFlagSource} />;
}
