import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const InTnFlagSource = require('./in-tn.webp');

export default function InTnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={InTnFlagSource} />;
}
