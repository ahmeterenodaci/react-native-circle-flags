import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AdFlagSource = require('./ad.webp');

export default function AdFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AdFlagSource} />;
}
