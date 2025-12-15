import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MrFlagSource = require('./mr.webp');

export default function MrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MrFlagSource} />;
}
