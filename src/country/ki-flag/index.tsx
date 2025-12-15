import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KiFlagSource = require('./ki.webp');

export default function KiFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KiFlagSource} />;
}
