import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const QuechuaFlagSource = require('./quechua.webp');

export default function QuechuaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={QuechuaFlagSource} />;
}
