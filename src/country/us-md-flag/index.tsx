import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsMdFlagSource = require('./us-md.webp');

export default function UsMdFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsMdFlagSource} />;
}
