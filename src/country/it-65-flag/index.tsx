import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const It65FlagSource = require('./it-65.webp');

export default function It65Flag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={It65FlagSource} />;
}
