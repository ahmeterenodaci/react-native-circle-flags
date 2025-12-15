import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtHaFlagSource = require('./et-ha.webp');

export default function EtHaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtHaFlagSource} />;
}
