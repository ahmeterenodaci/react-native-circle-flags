import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const XhFlagSource = require('./xh.webp');

export default function XhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={XhFlagSource} />;
}
