import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It21FlagSource = require('./it-21.webp');

export default function It21Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It21FlagSource} />;
}
