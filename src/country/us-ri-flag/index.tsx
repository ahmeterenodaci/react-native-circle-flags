import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsRiFlagSource = require('./us-ri.webp');

export default function UsRiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsRiFlagSource} />;
}
