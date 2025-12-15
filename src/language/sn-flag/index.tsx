import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SnFlagSource = require('./sn.webp');

export default function SnFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SnFlagSource} />;
}
