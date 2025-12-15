import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TmFlagSource = require('./tm.webp');

export default function TmFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={TmFlagSource} />;
}
