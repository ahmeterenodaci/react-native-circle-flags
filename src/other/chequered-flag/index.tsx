import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ChequeredFlagSource = require('./chequered.webp');

export default function ChequeredFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ChequeredFlagSource} />;
}
