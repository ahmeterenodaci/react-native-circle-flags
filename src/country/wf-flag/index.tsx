import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const WfFlagSource = require('./wf.webp');

export default function WfFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={WfFlagSource} />;
}
