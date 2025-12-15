import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SxFlagSource = require('./sx.webp');

export default function SxFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SxFlagSource} />;
}
