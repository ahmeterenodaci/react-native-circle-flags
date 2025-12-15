import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JvFlagSource = require('./jv.webp');

export default function JvFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={JvFlagSource} />;
}
