import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It67FlagSource = require('./it-67.webp');

export default function It67Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It67FlagSource} />;
}
