import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MalayaliFlagSource = require('./malayali.webp');

export default function MalayaliFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MalayaliFlagSource} />;
}
