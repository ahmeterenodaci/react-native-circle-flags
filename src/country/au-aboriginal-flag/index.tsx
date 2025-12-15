import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuAboriginalFlagSource = require('./au-aboriginal.webp');

export default function AuAboriginalFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AuAboriginalFlagSource} />;
}
