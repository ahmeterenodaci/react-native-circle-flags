import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const ViFlagSource = require('./vi.webp');

export default function ViFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={ViFlagSource} />;
}
