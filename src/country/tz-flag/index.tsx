import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TzFlagSource = require('./tz.webp');

export default function TzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TzFlagSource} />;
}
