import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UaKprFlagSource = require('./ua-kpr.webp');

export default function UaKprFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UaKprFlagSource} />;
}
