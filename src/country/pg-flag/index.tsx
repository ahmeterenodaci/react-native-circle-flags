import { CircleFlag, type CircleFlagProps } from '../../CircleFlag';

export const PgFlagSource = require('./pg.webp');

export default function PgFlag(props: Omit<CircleFlagProps, 'source'>) {
  return <CircleFlag {...props} source={PgFlagSource} />;
}
