import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SaFlagSource = require('./sa.webp');

export default function SaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SaFlagSource} />;
}
