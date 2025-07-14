import './Buttons.css'

export default function NavButton(props) {
    return <li>
        <button id='nav-button' onClick={props.onSelect}><h2>{props.children}</h2></button>
    </li>
}