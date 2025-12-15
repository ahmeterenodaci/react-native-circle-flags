import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const LkFlagSource = require('./lk.webp');

export default function LkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={LkFlagSource} />;
}
