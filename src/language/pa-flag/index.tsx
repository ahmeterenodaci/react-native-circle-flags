import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PaFlagSource = require('./pa.webp');

export default function PaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PaFlagSource} />;
}
