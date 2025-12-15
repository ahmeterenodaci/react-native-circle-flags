import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuBaFlagSource = require('./ru-ba.webp');

export default function RuBaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuBaFlagSource} />;
}
