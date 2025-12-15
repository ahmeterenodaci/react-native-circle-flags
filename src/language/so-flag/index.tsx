import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SoFlagSource = require('./so.webp');

export default function SoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SoFlagSource} />;
}
