import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KongoFlagSource = require('./kongo.webp');

export default function KongoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KongoFlagSource} />;
}
