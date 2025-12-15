import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const JaFlagSource = require('./ja.webp');

export default function JaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={JaFlagSource} />;
}
