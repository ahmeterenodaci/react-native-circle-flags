import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KriFlagSource = require('./kri.webp');

export default function KriFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KriFlagSource} />;
}
