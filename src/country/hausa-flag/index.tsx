import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const HausaFlagSource = require('./hausa.webp');

export default function HausaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={HausaFlagSource} />;
}
