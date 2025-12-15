import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuCeFlagSource = require('./ru-ce.webp');

export default function RuCeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={RuCeFlagSource} />;
}
