import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnGhFlagSource = require('./en-gh.webp');

export default function EnGhFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnGhFlagSource} />;
}
