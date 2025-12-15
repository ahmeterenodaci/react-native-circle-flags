import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SsFlagSource = require('./ss.webp');

export default function SsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SsFlagSource} />;
}
