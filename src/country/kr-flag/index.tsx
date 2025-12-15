import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KrFlagSource = require('./kr.webp');

export default function KrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KrFlagSource} />;
}
