type TUnitDescriptionProps = {
    description: string
}

export function UnitDescription({ description }: TUnitDescriptionProps) {

    return (
        <p>{description}</p>
    )
}