import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SvFlagSource = require('./sv.webp');

export default function SvFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={SvFlagSource} />;
}
