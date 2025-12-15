import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuSaFlagSource = require('./au-sa.webp');

export default function AuSaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={AuSaFlagSource} />;
}
