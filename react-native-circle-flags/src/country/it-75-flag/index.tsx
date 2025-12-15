import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It75FlagSource = require('./it-75.webp');

export default function It75Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It75FlagSource} />;
}
