import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It42FlagSource = require('./it-42.webp');

export default function It42Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It42FlagSource} />;
}
