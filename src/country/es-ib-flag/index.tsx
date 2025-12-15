import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsIbFlagSource = require('./es-ib.webp');

export default function EsIbFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsIbFlagSource} />;
}
