import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const FrCpFlagSource = require('./fr-cp.webp');

export default function FrCpFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={FrCpFlagSource} />;
}
