import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KzFlagSource = require('./kz.webp');

export default function KzFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KzFlagSource} />;
}
