import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AsFlagSource = require('./as.webp');

export default function AsFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={AsFlagSource} />;
}
