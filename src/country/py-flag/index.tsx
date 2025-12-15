import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PyFlagSource = require('./py.webp');

export default function PyFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PyFlagSource} />;
}
