import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const CeFlagSource = require('./ce.webp');

export default function CeFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={CeFlagSource} />;
}
