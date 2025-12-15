import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ItFlagSource = require('./it.webp');

export default function ItFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ItFlagSource} />;
}
