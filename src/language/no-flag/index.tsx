import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const NoFlagSource = require('./no.webp');

export default function NoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={NoFlagSource} />;
}
