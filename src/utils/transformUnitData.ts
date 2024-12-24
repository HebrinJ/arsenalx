
// Трансформация данных предполагает только один уровень вложенности объектов

export type TRawUnitDataObject = {
    [key: string]: string | number | TRawUnitDataObject;
}

export type TTransformedUnitDataField = {
    [key: string]: string | number
}

export type TTransformedUnitData = Array<TTransformedUnitDataField> | []

const fieldsToRemove = ['id', 'type', 'description', 'mainImage'];

export function TransformUnitData(incomingUnitData: TRawUnitDataObject): TTransformedUnitData {
    const transformedData: Array<TTransformedUnitDataField> = [];

    const clearedData = RemoveUnwantedFields(incomingUnitData, fieldsToRemove)

        for (const field in clearedData) {
            const value = clearedData[field];
    
            if(typeof value === 'string' || typeof value === 'number') {
                transformedData.push({[field]: value});
            } else if (typeof value === 'object' && value !== null) {
                transformedData.push({[field]: 'Заголовок'})

                for (const innerField in value) {
                    const innerValue = value[innerField];

                    if(typeof innerField === 'string' && (typeof innerValue === 'string' || typeof innerValue === 'number')) {
                        transformedData.push({[innerField]: innerValue})
                    }
                }
            }
        }    
    
    return transformedData;
}

function RemoveUnwantedFields(incomingUnitData: TRawUnitDataObject, fieldsToRemove: string []) {

    for (let field of fieldsToRemove) {
        if (field in incomingUnitData) {
            delete incomingUnitData[field];
        }
    }
    return incomingUnitData;
}