import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It88FlagSource = require('./it-88.webp');

export default function It88Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It88FlagSource} />;
}
