import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnNgFlagSource = require('./en-ng.webp');

export default function EnNgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnNgFlagSource} />;
}
