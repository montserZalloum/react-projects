import React from 'react'
import Input from '../admin/ui/Input'

function CreadintialFields(props) {
    const handleInputChange = ({target: {name,value}})=> {
        setPropName(name)(value)
    }
    function setPropName(name) {
        return props['set' +name.charAt(0).toUpperCase() + name.slice(1)];
    }
  return (
    <div className="grid-2">
        <Input
            value={props.name}
            onChange={handleInputChange}
            label="Name"
            name="name"
        />
        <Input
            value={props.password}
            onChange={handleInputChange}
            label="Password"
            name="password"
        />
    </div>
  )
}

export default CreadintialFields