import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const DoFlagSource = require('./do.webp');

export default function DoFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={DoFlagSource} />;
}
