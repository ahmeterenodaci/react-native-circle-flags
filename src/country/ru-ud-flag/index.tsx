import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuUdFlagSource = require('./ru-ud.webp');

export default function RuUdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RuUdFlagSource} />;
}
