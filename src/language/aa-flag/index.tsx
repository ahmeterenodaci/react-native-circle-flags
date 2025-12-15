import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AaFlagSource = require('./aa.webp');

export default function AaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AaFlagSource} />;
}
