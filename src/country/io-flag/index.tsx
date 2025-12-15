import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const IoFlagSource = require('./io.webp');

export default function IoFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={IoFlagSource} />;
}
