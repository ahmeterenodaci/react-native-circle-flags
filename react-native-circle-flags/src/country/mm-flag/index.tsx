import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MmFlagSource = require('./mm.webp');

export default function MmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MmFlagSource} />;
}
