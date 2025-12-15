import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ShHlFlagSource = require('./sh-hl.webp');

export default function ShHlFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ShHlFlagSource} />;
}
