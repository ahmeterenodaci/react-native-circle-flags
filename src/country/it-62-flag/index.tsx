import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It62FlagSource = require('./it-62.webp');

export default function It62Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It62FlagSource} />;
}
