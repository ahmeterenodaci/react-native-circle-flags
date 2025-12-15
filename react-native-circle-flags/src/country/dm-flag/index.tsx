import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DmFlagSource = require('./dm.webp');

export default function DmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={DmFlagSource} />;
}
