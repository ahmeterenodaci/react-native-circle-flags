import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CaFlagSource = require('./ca.webp');

export default function CaFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CaFlagSource} />;
}
