import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UaFlagSource = require('./ua.webp');

export default function UaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UaFlagSource} />;
}
