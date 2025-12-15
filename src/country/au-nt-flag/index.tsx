import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuNtFlagSource = require('./au-nt.webp');

export default function AuNtFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuNtFlagSource} />;
}
