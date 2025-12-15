import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EtTiFlagSource = require('./et-ti.webp');

export default function EtTiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EtTiFlagSource} />;
}
