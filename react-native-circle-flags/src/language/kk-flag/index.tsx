import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KkFlagSource = require('./kk.webp');

export default function KkFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KkFlagSource} />;
}
