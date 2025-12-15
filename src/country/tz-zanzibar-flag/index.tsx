import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const TzZanzibarFlagSource = require('./tz-zanzibar.webp');

export default function TzZanzibarFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={TzZanzibarFlagSource} />;
}
