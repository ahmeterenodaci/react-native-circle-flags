import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IqKrFlagSource = require('./iq-kr.webp');

export default function IqKrFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={IqKrFlagSource} />;
}
