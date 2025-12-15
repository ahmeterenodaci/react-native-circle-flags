import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KpFlagSource = require('./kp.webp');

export default function KpFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KpFlagSource} />;
}
