import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const OccitaniaFlagSource = require('./occitania.webp');

export default function OccitaniaFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={OccitaniaFlagSource} />;
}
