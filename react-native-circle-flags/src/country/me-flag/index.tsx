import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MeFlagSource = require('./me.webp');

export default function MeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MeFlagSource} />;
}
