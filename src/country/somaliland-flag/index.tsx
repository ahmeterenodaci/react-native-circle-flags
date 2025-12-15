import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SomalilandFlagSource = require('./somaliland.webp');

export default function SomalilandFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SomalilandFlagSource} />;
}
