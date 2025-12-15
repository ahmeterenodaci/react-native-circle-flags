import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It77FlagSource = require('./it-77.webp');

export default function It77Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It77FlagSource} />;
}
