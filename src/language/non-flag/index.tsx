import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NonFlagSource = require('./non.webp');

export default function NonFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={NonFlagSource} />;
}
