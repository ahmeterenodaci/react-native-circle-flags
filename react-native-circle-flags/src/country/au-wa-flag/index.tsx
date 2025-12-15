import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuWaFlagSource = require('./au-wa.webp');

export default function AuWaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuWaFlagSource} />;
}
