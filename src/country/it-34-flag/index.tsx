import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It34FlagSource = require('./it-34.webp');

export default function It34Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It34FlagSource} />;
}
