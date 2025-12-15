import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CkFlagSource = require('./ck.webp');

export default function CkFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CkFlagSource} />;
}
