import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuKoFlagSource = require('./ru-ko.webp');

export default function RuKoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuKoFlagSource} />;
}
