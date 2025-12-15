import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsNcFlagSource = require('./us-nc.webp');

export default function UsNcFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsNcFlagSource} />;
}
