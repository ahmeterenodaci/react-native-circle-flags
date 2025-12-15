import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtOrFlagSource = require('./et-or.webp');

export default function EtOrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtOrFlagSource} />;
}
