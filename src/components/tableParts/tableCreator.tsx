import { useEffect, useState } from 'react'
import { TTransformedUnitData, TTransformedUnitDataField } from '../../utils/transformUnitData'
import { splitUnitDataToBlocks } from '../../utils/splitToBlocks';
import { TableBlock } from './tableBlock';

type TTableCreatorProps = {
    tableData: TTransformedUnitData,
}

type TDataBlocks = Array<Array<TTransformedUnitDataField>>;

export function TableCreator({ tableData }: TTableCreatorProps): JSX.Element {    

    const [dataBlocks, setDataBlocks] = useState<TDataBlocks>([]);

    useEffect(() => {
        const splittedData = splitUnitDataToBlocks(tableData);
        setDataBlocks(splittedData);
    },[tableData])

    return (<>
            {dataBlocks.map((block: Array<TTransformedUnitDataField>) => (
                <TableBlock block={block}/>
            ))}        
    </>)
}