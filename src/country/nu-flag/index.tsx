import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NuFlagSource = require('./nu.webp');

export default function NuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NuFlagSource} />;
}
