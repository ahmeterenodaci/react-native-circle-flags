import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CkbFlagSource = require('./ckb.webp');

export default function CkbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CkbFlagSource} />;
}
