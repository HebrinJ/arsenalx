import { TTransformedUnitDataField } from "../../utils/transformUnitData"
import { CreateTableRow } from "./tableRow"
import style from './tableBlock.module.css'

type TTableBlockProps = {
    block: Array<TTransformedUnitDataField>;
}

export function TableBlock({ block }: TTableBlockProps): JSX.Element {

    return (<table className={style.table}>
        {block.map((row) => {
            const label = Object.keys(row)[0];
            const data = row[label];

            if(data === 'Заголовок') {
                return <CreateTableRow label={Object.keys(row)[0]} data={data} isHeader={true}/>
            }

            return <CreateTableRow label={Object.keys(row)[0]} data={data} isHeader={false}/>                
        })}
    </table>)
}