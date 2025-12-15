import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MwFlagSource = require('./mw.webp');

export default function MwFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={MwFlagSource} />;
}
