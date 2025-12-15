import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuLprFlagSource = require('./ru-lpr.webp');

export default function RuLprFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuLprFlagSource} />;
}
