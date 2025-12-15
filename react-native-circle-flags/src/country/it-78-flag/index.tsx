import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It78FlagSource = require('./it-78.webp');

export default function It78Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It78FlagSource} />;
}
