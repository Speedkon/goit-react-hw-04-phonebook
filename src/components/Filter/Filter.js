import {Label, Input} from './Filter.styled'

export const Filter = ({ onFilter }) => {
    
    return (
        <Label>
            Find contacts by name
            <Input type="text" name="filter" placeholder="Search" onChange={e => onFilter(e.target.value)} />
        </Label>
    )
}