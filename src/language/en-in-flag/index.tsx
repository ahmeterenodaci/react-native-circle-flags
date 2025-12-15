import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnInFlagSource = require('./en-in.webp');

export default function EnInFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnInFlagSource} />;
}
