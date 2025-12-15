import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtSiFlagSource = require('./et-si.webp');

export default function EtSiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtSiFlagSource} />;
}
