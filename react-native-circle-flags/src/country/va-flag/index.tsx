import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const VaFlagSource = require('./va.webp');

export default function VaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={VaFlagSource} />;
}
