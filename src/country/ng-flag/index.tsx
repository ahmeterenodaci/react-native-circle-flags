import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NgFlagSource = require('./ng.webp');

export default function NgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NgFlagSource} />;
}
