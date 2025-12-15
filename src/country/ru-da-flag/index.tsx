import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuDaFlagSource = require('./ru-da.webp');

export default function RuDaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RuDaFlagSource} />;
}
