import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const RuFlagSource = require('./ru.webp');

export default function RuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={RuFlagSource} />;
}
