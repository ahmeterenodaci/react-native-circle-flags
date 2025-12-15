import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FoFlagSource = require('./fo.webp');

export default function FoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={FoFlagSource} />;
}
