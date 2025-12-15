import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AkFlagSource = require('./ak.webp');

export default function AkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AkFlagSource} />;
}
