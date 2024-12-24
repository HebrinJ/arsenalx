import { TTransformedUnitData as TTransformedUnitDataFields, TTransformedUnitDataField } from './transformUnitData';

export function splitUnitDataToBlocks(unitData: TTransformedUnitDataFields): Array<Array<TTransformedUnitDataField>> {
        const splittedBlocks: Array<Array<TTransformedUnitDataField>> = [];
        let currentBlock: Array<TTransformedUnitDataField> = [];

        unitData.forEach((record, index) => {
            const key = Object.keys(record)[0];
            const data = record[key];

            if(data === 'Заголовок') {
                if(currentBlock.length > 0) {
                    const newBlock = currentBlock.slice();
                    splittedBlocks.push(newBlock);
                    currentBlock = [];
                }
            }
            
            currentBlock.push(record);

            if(index === unitData.length) {
                const newBlock = currentBlock.slice();
                splittedBlocks.push(newBlock);
            }
        })
        
        const exportBlocks = splittedBlocks.slice();
        return exportBlocks;
    }