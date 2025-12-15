import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LusFlagSource = require('./lus.webp');

export default function LusFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={LusFlagSource} />;
}
