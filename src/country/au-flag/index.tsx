import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuFlagSource = require('./au.webp');

export default function AuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuFlagSource} />;
}
