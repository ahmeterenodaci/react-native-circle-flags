import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EasterIslandFlagSource = require('./easter_island.webp');

export default function EasterIslandFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EasterIslandFlagSource} />;
}
