import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const MaoriFlagSource = require('./maori.webp');

export default function MaoriFlag(props: Omit<CircleFlagProps, "source">) {
  return <CircleFlag {...props} source={MaoriFlagSource} />;
}
