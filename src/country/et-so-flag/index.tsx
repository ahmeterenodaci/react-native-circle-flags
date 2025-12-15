import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtSoFlagSource = require('./et-so.webp');

export default function EtSoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtSoFlagSource} />;
}
