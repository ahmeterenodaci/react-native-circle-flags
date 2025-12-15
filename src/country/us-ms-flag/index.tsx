import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const UsMsFlagSource = require('./us-ms.webp');

export default function UsMsFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={UsMsFlagSource} />;
}
