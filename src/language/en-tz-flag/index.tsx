import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnTzFlagSource = require('./en-tz.webp');

export default function EnTzFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnTzFlagSource} />;
}
