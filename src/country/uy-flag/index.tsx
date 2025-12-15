import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UyFlagSource = require('./uy.webp');

export default function UyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UyFlagSource} />;
}
