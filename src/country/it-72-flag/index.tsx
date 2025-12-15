import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It72FlagSource = require('./it-72.webp');

export default function It72Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It72FlagSource} />;
}
