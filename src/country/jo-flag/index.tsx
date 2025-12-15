import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JoFlagSource = require('./jo.webp');

export default function JoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={JoFlagSource} />;
}
