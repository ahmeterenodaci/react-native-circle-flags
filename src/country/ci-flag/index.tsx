import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CiFlagSource = require('./ci.webp');

export default function CiFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={CiFlagSource} />;
}
