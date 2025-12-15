import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ZaFlagSource = require('./za.webp');

export default function ZaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={ZaFlagSource} />;
}
