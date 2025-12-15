import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SmFlagSource = require('./sm.webp');

export default function SmFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SmFlagSource} />;
}
