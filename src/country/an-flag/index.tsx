import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AnFlagSource = require('./an.webp');

export default function AnFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AnFlagSource} />;
}
