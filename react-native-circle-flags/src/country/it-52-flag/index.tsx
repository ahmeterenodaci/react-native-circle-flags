import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It52FlagSource = require('./it-52.webp');

export default function It52Flag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={It52FlagSource} />;
}
