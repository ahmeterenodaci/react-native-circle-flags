import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AzFlagSource = require('./az.webp');

export default function AzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AzFlagSource} />;
}
