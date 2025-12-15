import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BbFlagSource = require('./bb.webp');

export default function BbFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={BbFlagSource} />;
}
