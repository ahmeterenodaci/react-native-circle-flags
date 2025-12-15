import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It55FlagSource = require('./it-55.webp');

export default function It55Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It55FlagSource} />;
}
