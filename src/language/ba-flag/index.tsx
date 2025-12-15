import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BaFlagSource = require('./ba.webp');

export default function BaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BaFlagSource} />;
}
