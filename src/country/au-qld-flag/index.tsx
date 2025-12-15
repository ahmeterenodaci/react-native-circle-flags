import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuQldFlagSource = require('./au-qld.webp');

export default function AuQldFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuQldFlagSource} />;
}
