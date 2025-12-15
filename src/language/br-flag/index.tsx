import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const BrFlagSource = require('./br.webp');

export default function BrFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={BrFlagSource} />;
}
