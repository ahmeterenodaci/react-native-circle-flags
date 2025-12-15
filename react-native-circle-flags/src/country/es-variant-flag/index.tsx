import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EsVariantFlagSource = require('./es-variant.webp');

export default function EsVariantFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EsVariantFlagSource} />;
}
