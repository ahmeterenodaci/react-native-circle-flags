import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SovietUnionFlagSource = require('./soviet_union.webp');

export default function SovietUnionFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SovietUnionFlagSource} />;
}
