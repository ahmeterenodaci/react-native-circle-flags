import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const AuTorresStraitIslandsFlagSource = require('./au-torres_strait_islands.webp');

export default function AuTorresStraitIslandsFlag(
  props: Omit<CircleFlagProps, 'source'>
) {
  return <CircleFlag {...props} source={AuTorresStraitIslandsFlagSource} />;
}
