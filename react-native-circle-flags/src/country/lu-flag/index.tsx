import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LuFlagSource = require('./lu.webp');

export default function LuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LuFlagSource} />;
}
