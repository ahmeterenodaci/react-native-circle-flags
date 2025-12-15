import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UzFlagSource = require('./uz.webp');

export default function UzFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UzFlagSource} />;
}
