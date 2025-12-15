import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuCuFlagSource = require('./ru-cu.webp');

export default function RuCuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuCuFlagSource} />;
}
