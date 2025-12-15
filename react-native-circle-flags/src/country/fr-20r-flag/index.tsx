import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const Fr20rFlagSource = require('./fr-20r.webp');

export default function Fr20rFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={Fr20rFlagSource} />;
}
