import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KikuyuFlagSource = require('./kikuyu.webp');

export default function KikuyuFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KikuyuFlagSource} />;
}
