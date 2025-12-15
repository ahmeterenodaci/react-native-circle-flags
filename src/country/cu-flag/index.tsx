import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CuFlagSource = require('./cu.webp');

export default function CuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CuFlagSource} />;
}
