import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtSwFlagSource = require('./et-sw.webp');

export default function EtSwFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtSwFlagSource} />;
}
