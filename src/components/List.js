import React, { useEffect, useState } from 'react';

export default function MyComponent() {
    const [items, setItems] = useState([false]);
    const [item, setitem] = useState(false);
    const [itemUser, setitemUser] = useState(false);

    const handleChange = (event) => {
      event.preventDefault()
      if (event.target.attributes.idName.value !== '') {
        setItems(items);
        setitem(event.target.attributes.idName.value);
      }
    }

    function MyComponents(props) {
      return (
      <div>
        <img src={props.props.avatar} />
        <h2>{props.props.name}</h2>
        <ul class="list-group">
              <li class="list-group-item disabled" aria-disabled="true">{props.props.details.city}</li>
              <li class="list-group-item disabled" aria-disabled="true">{props.props.details.company}</li>
              <li class="list-group-item disabled" aria-disabled="true">{props.props.details.position}</li>
        </ul>
      </div>
      )
    }

    useEffect(() => {
      fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item}.json`)
        .then(res => res.json())
        .then(
          (result) => {
            setitemUser(result);
          }
        )
    }, [item])
  
    useEffect(() => {
      fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
        .then(res => res.json())
        .then(
          (result) => {
            setItems(result);
          }
        )
    }, [])
  
    return (
    <div class="divFlex">
        <div class="listAm">
        <ul class="list-group">
          {items.map(item => (
            <li onClick={handleChange} class="list-group-item disabled" key={item.id} idName={item.id} aria-disabled="true">{item.name}</li>
          ))}
        </ul>
        </div>
        <div class="details">
          { item != false && itemUser != false ? <MyComponents props={itemUser}/> : ''}
        </div>
    </div>
    );
  }