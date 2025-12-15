import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KlingonFlagSource = require('./klingon.webp');

export default function KlingonFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={KlingonFlagSource} />;
}
