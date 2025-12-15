import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuTaFlagSource = require('./ru-ta.webp');

export default function RuTaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuTaFlagSource} />;
}
