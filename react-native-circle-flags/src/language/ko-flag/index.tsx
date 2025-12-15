import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const KoFlagSource = require('./ko.webp');

export default function KoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={KoFlagSource} />;
}
