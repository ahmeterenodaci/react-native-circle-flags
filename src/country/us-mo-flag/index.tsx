import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsMoFlagSource = require('./us-mo.webp');

export default function UsMoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsMoFlagSource} />;
}
