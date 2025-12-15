import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MrjFlagSource = require('./mrj.webp');

export default function MrjFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MrjFlagSource} />;
}
