import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InOrFlagSource = require('./in-or.webp');

export default function InOrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={InOrFlagSource} />;
}
