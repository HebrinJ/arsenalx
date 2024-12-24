
type TCreateTableRawProps = {
    label: string,
    data: string | number,
    isHeader: boolean,
}

export function CreateTableRow({ label, data, isHeader }: TCreateTableRawProps): JSX.Element {
    
    if(isHeader) {
        return (
            <tr>
                <td colSpan={2}>{label}</td>
            </tr> 
        )
    } else {
        return (
            <tr>
                <td>{label}</td>
                <td>{data}</td>
            </tr> 
        )
    }
}