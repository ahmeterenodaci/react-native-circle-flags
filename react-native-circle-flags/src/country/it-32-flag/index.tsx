import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It32FlagSource = require('./it-32.webp');

export default function It32Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It32FlagSource} />;
}
