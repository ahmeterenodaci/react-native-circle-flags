import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnIeFlagSource = require('./en-ie.webp');

export default function EnIeFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnIeFlagSource} />;
}
