import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TaFlagSource = require('./ta.webp');

export default function TaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TaFlagSource} />;
}
