import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PtBrFlagSource = require('./pt-br.webp');

export default function PtBrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={PtBrFlagSource} />;
}
