import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsArFlagSource = require('./us-ar.webp');

export default function UsArFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={UsArFlagSource} />;
}
