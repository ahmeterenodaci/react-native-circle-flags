import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It25FlagSource = require('./it-25.webp');

export default function It25Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It25FlagSource} />;
}
