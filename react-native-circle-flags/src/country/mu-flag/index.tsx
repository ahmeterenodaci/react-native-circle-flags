import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MuFlagSource = require('./mu.webp');

export default function MuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MuFlagSource} />;
}
