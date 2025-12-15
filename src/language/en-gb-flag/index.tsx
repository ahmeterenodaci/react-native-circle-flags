import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnGbFlagSource = require('./en-gb.webp');

export default function EnGbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EnGbFlagSource} />;
}
