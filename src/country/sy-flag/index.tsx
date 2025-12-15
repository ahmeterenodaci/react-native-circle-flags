import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SyFlagSource = require('./sy.webp');

export default function SyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SyFlagSource} />;
}
