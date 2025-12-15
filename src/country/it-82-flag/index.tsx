import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It82FlagSource = require('./it-82.webp');

export default function It82Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It82FlagSource} />;
}
