import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It36FlagSource = require('./it-36.webp');

export default function It36Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It36FlagSource} />;
}
