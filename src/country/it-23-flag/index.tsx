import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It23FlagSource = require('./it-23.webp');

export default function It23Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It23FlagSource} />;
}
