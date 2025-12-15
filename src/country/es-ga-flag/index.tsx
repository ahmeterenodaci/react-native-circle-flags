import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsGaFlagSource = require('./es-ga.webp');

export default function EsGaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsGaFlagSource} />;
}
