
//Generic Type Approach allows the props to be parametized and dynamic to be apple to pass in anytype of datatype required...
type ListProps<T> = { 
    items: T[]
    onClick: (value: T) => void
}
export const GenericList = <T extends { id: number}>({items, onClick}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item, index) => {
                return (
                    <div key={item.id} onClick={() => onClick(item)}> {item} </div>
                )
            })}
        </div> 
    )
}