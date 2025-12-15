import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const SuFlagSource = require('./su.webp');

export default function SuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={SuFlagSource} />;
}
