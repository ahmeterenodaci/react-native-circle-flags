import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EuropeanUnionFlagSource = require('./european_union.webp');

export default function EuropeanUnionFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={EuropeanUnionFlagSource} />;
}
