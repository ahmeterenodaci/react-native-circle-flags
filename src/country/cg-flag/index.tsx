import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CgFlagSource = require('./cg.webp');

export default function CgFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CgFlagSource} />;
}
