import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const EnAuFlagSource = require('./en-au.webp');

export default function EnAuFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={EnAuFlagSource} />;
}
