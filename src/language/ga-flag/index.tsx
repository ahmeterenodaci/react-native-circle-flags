import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const GaFlagSource = require('./ga.webp');

export default function GaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={GaFlagSource} />;
}
