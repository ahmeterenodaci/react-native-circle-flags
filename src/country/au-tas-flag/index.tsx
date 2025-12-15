import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuTasFlagSource = require('./au-tas.webp');

export default function AuTasFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuTasFlagSource} />;
}
