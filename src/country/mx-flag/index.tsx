import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MxFlagSource = require('./mx.webp');

export default function MxFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MxFlagSource} />;
}
