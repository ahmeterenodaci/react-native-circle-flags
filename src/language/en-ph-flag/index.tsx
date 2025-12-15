import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnPhFlagSource = require('./en-ph.webp');

export default function EnPhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnPhFlagSource} />;
}
