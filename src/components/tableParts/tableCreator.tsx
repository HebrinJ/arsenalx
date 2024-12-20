import { TTransformedUnitData, TTransformedUnitDataField } from '../../utils/transformUnitData'
import style from './tableCreator.module.css'

type TTableCreatorProps = {
    tableData: TTransformedUnitData,
}

export function TableCreator({ tableData }: TTableCreatorProps): JSX.Element {    

    return (
        <table className={style.table}>
            {tableData.map((item) => {

                const label = Object.keys(item)[0];
                const data = item[label];

                return (
                    <tr>
                        <td>{label}</td>
                        <td>{data}</td>
                    </tr> 
                )
            })}                       
        </table>
    )
}