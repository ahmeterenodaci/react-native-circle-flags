import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuDprFlagSource = require('./ru-dpr.webp');

export default function RuDprFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuDprFlagSource} />;
}
