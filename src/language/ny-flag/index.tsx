import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NyFlagSource = require('./ny.webp');

export default function NyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NyFlagSource} />;
}
