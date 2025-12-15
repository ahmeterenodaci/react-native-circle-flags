import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PkFlagSource = require('./pk.webp');

export default function PkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PkFlagSource} />;
}
