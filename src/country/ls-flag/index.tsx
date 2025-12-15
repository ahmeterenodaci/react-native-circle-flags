import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LsFlagSource = require('./ls.webp');

export default function LsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LsFlagSource} />;
}
