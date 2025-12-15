import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CwFlagSource = require('./cw.webp');

export default function CwFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CwFlagSource} />;
}
