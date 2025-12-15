import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It57FlagSource = require('./it-57.webp');

export default function It57Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It57FlagSource} />;
}
