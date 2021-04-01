import Item from './Item'
const ItemList = () => {
    let array = [<Item num="0" />, <Item num="1" />, <Item num="2" />, <Item num="3" />, <Item num="4" />, <Item num="5" />, <Item num="6" />, <Item num="7" />, <Item num="8" />, <Item num="9" />, <Item num="10" />, <Item num="11" />, <Item num="12" />, <Item num="13" />, <Item num="14" />, <Item num="15" />, <Item num="16" />, <Item num="17" />]
    

    return (
        <ul className="grid grid-flow-col grid-cols-3 grid-rows-6 gap-4 text-center">
            {array.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}
export default ItemList